const fs = require('fs');
const path = require('path');

// 在Node.js环境中模拟浏览器环境
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.window = dom.window;
global.document = dom.window.document;

// 引入d3.js
const d3 = require('d3');

// 读取JS数据文件的函数
function readJsData(filePath) {
    try {
        console.log(`正在读取文件: ${filePath}`);
        const content = fs.readFileSync(filePath, 'utf-8');
        
        // 处理注释和空行
        const lines = content.split('\n')
            .map(line => line.trim())
            .filter(line => line && !line.startsWith('//'))
            .join('\n');
        
        // 使用正则表达式提取数组数据
        const match = lines.match(/export\s+const\s+\w+\s*=\s*(\[.*?\]);/s);
        if (match) {
            let dataStr = match[1];
            // 替换JavaScript特有的语法为JSON兼容语法
            dataStr = dataStr.replace(/([{,])\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*:/g, '$1"$2":');
            dataStr = dataStr.replace(/\/\*[\s\S]*?\*\//g, ''); // 移除多行注释
            
            // 解析为JSON对象
            return JSON.parse(dataStr);
        } else {
            throw new Error(`无法从文件 ${filePath} 中提取数据`);
        }
    } catch (error) {
        console.error(`读取文件 ${filePath} 失败:`, error.message);
        throw error;
    }
}

// 将数据写入JavaScript文件的函数
function writeJsData(filePath, dataName, data) {
    try {
        const content = `// 预加热处理后的${dataName}数据\nexport const ${dataName} = ${JSON.stringify(data, null, 2)};\n`;
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`已写入文件: ${filePath}`);
    } catch (error) {
        console.error(`写入文件 ${filePath} 失败:`, error.message);
        throw error;
    }
}

// 准备可视化数据（基于interation.js中的逻辑）
function prepareVisualizationData(nodes, links, clusters) {
    // 为每个节点添加cluster属性
    const nodeMap = new Map(nodes.map(node => [node.id, node]));
    
    nodes.forEach(node => {
        if (node.layer === 1) {
            node.cluster = [];
            for (const cluster of clusters) {
                if (cluster.nodes.includes(node.id)) {
                    node.cluster.push(clusters.indexOf(cluster));
                    break;
                }
            }
        } else if (node.layer === 2) {
            node.upper = true;
        } else if (node.layer === 0) {
            node.condition = true;
        } else if (node.layer === -1) {
            node.hidden1 = true;
        } else if (node.layer === -2) {
            node.hidden2 = true;
        }
    });
    
    // 为连接准备可视化格式
    const visLinks = [];
    links.forEach(link => {
        if (link.source !== undefined) {
            // 下层连接
            const sourceNode = nodeMap.get(link.source);
            const targetNode = nodeMap.get(link.target);
            
            visLinks.push({
                source: link.source,
                target: link.target,
                cluster: sourceNode && targetNode && sourceNode.cluster 
                    ? sourceNode.cluster.filter(element => targetNode.cluster && targetNode.cluster.includes(element)) 
                    : [],
                distance: link.distance,
                originalDistance: link.distance,
                // 标记连接是否与隐藏节点相关
                isHiddenLink: (sourceNode && (sourceNode.layer < 0)) ||
                                (targetNode && (targetNode.layer < 0))
            });
        } else {
            // 上层连接
            visLinks.push({
                source: link.nodes[0],
                target: link.nodes[1],
                upper: true,
                distance: link.distance,
                originalDistance: link.distance,
                isHiddenLink: false 
            });
        }
    });

    // 为每个连接生成唯一ID
    visLinks.forEach((link, index) => {
        link.id = `link-${index}`;
    });

    return { nodes, visLinks };
}

// 过滤链接的函数（基于interation.js中的逻辑）
function filteredLinks(visLinks, hiddenNodesVisible) {
    return visLinks.filter(link => {
        if (link.isHiddenLink && !hiddenNodesVisible) {
            return false;
        }
        return true;
    });
}

// 单向链接力函数（基于interation.js中的逻辑）
function oneWayLinkForce(visLinks) {
    // 默认阻尼系数设为0.1，范围建议在0-1之间
    const damping = 0.3;
    
    return function(alpha) {
        for (const link of visLinks) {
            const source = link.source;
            const target = link.target;
            
            if (!target || typeof target.x !== 'number' || typeof target.y !== 'number') {
                continue;
            }
            
            // 对 layer=-1/-2 的节点应用更强的单向力
            if (source.layer === -1 || source.layer === -2) {
                const dx = target.x - source.x;
                const dy = target.y - source.y;
                const d = Math.sqrt(dx * dx + dy * dy);
                
                const distance = link.distance || 100;
                
                if (d && d !== distance) {
                    // 增加力强度，确保覆盖默认的 forceLink
                    const k = 2; // 从 0.5 增加到 1.2
                    const force = (d - distance) / d * k * alpha;
                    
                    if (source.vx !== undefined && source.vy !== undefined) {
                        source.vx += dx * force;
                        source.vy += dy * force;
                        
                        // 应用阻尼，减缓节点速度，使系统更快趋于稳定
                        source.vx *= (1 - damping);
                        source.vy *= (1 - damping);
                    }
                }
            }
        }
    };
}

// 创建d3力导向图模拟（基于interation.js中的逻辑）
// === 最小修复版 createSimulation ===
function createSimulation(visNodes, visLinks, width, height, hiddenNodesVisible) {
    const nodeById = new Map(visNodes.map(n => [n.id, n]));

    // 过滤链接
    const filtered = filteredLinks(visLinks, hiddenNodesVisible);

    const nonHiddenLinks = filtered.map(link => {
        // 如果 source/target 还是 id，就替换为 node 对象
        if (typeof link.source !== "object") link.source = nodeById.get(link.source);
        if (typeof link.target !== "object") link.target = nodeById.get(link.target);
        return link;
    }).filter(link => {
        // 同时检查 source 和 target
        return !(link.source && link.target && (
            (link.source.layer === -1 || link.source.layer === -2) ||
            (link.target.layer === -1 || link.target.layer === -2)
        ));
    });

    // 初始化节点位置 —— 用 typeof 精确判断，避免 0 被当作未设置
    visNodes.forEach(node => {
        if (typeof node.x !== 'number') {
            node.x = Math.random() * width;
        }
        if (typeof node.y !== 'number') {
            node.y = Math.random() * height;
        }
        node.prevX = node.x;
        node.prevY = node.y;
    });

    // 创建力导向图 - 使用自定义力（**不要**把自定义函数传给 forceManyBody().strength）
    const sim = d3.forceSimulation(visNodes)
        .force('link', d3.forceLink(nonHiddenLinks).distance(d => {
            if (d.upper) return 200;
            if (d.source && d.source.layer === 0) return 150; // 仅检查layer=0
            return 100;
        }))
        // 将自定义单向链接力直接注册为一个自定义 force（而不是滥用 forceManyBody().strength）
        .force('oneWayLink', oneWayLinkForce(filtered))
        .force('center', d3.forceCenter(width / 2, height / 2))
        .force('x', d3.forceX(width / 2).strength(0.04))
        .force('y', d3.forceX(height / 2).strength(0.03))
        .force('charge', d3.forceManyBody().strength(d => {
            if (d.layer === 1) return d.nodecharge;
            return 0;
        }).distanceMax(300))
        .force('collision', d3.forceCollide().radius(d => {
            if (d.layer === 1) return 30;
            return 0;        
        }))
        .alpha(1)            // 初始alpha值
        .alphaMin(0.001)     // 最小alpha值
        .alphaDecay(0.01)  // alpha衰减率
        .alphaTarget(0);     // alpha目标值


    return sim;
}


// 计算节点位置变化量
function calculateMovement(nodes) {
    let totalMovement = 0;
    nodes.forEach(node => {
        if (node.prevX !== undefined && node.prevY !== undefined) {
            const dx = node.x - node.prevX;
            const dy = node.y - node.prevY;
            totalMovement += Math.sqrt(dx * dx + dy * dy);
        }
        // 保存当前位置用于下次计算
        node.prevX = node.x;
        node.prevY = node.y;
    });
    return totalMovement / nodes.length;
}

// 主函数
function main() {
    // 文件路径
    const currentDir = __dirname;
    const nodesFile = path.join(currentDir, 'nodes.js');
    const linksFile = path.join(currentDir, 'links.js');
    const clustersFile = path.join(currentDir, 'clusters.js');
    const conditionsFile = path.join(currentDir, 'conditions.js');
    const visNodesFile = path.join(currentDir, 'visNodes.js');
    const visLinksFile = path.join(currentDir, 'visLinks.js');
    
    try {
        // 读取数据
        console.log('正在读取数据文件...');
        const nodes = readJsData(nodesFile);
        const links = readJsData(linksFile);
        const clusters = readJsData(clustersFile);
        const conditions = readJsData(conditionsFile);
        
        console.log(`读取完成：${nodes.length}个节点, ${links.length}条链接, ${clusters.length}个集群, ${conditions.length}个条件`);
        
        // 准备可视化数据
        console.log('正在准备可视化数据...');
        const { nodes: visNodes, visLinks } = prepareVisualizationData(
            JSON.parse(JSON.stringify(nodes)), // 深拷贝避免修改原数据
            JSON.parse(JSON.stringify(links)),
            clusters
        );
        
        // 模拟画布大小
        const width = 1600;
        const height = 900;
        
        // 迭代，切换hiddenNodesVisible的状态，并模拟
        console.log('开始预加热模拟...');
        let hiddenNodesVisible = false;
        const convergenceThreshold = 0.1; // 收敛阈值
        const maxIterations = 20; // 最大迭代次数
        
        for (let iteration = 0; iteration < maxIterations; iteration++) {
            console.log(`迭代 ${iteration + 1}/${maxIterations}: hiddenNodesVisible = ${hiddenNodesVisible}`);
            
            // 创建d3力导向图模拟
            const simulation = createSimulation(visNodes, visLinks, width, height, hiddenNodesVisible);
            
            // 运行多步模拟
            const steps = 200;
            for (let i = 0; i < steps; i++) {
                simulation.tick();
            }
            
            // 计算移动量
            const movement = calculateMovement(visNodes);
            console.log(`  本次迭代平均移动量: ${movement.toFixed(4)}`);
            
            // 如果移动量小于阈值，提前结束
            if (movement < convergenceThreshold && iteration > 0) {
                console.log(`已收敛 (移动量 < ${convergenceThreshold})，提前结束迭代`);
                break;
            }
            hiddenNodesVisible = !hiddenNodesVisible;
        }
        
        // 计算并保存相对坐标
        console.log('正在计算相对坐标...');
        visNodes.forEach(node => {
            // 计算相对坐标（坐标与height width之比）
            node.relX = node.x / width;
            node.relY = node.y / height; 
        }); 

        // 过滤链接属性，移除x, y, prevX, prevY, vy, vx, absX, absY       
        console.log('正在过滤节点属性...');
        const filteredVisNodes = visNodes.map(node => {
            const filteredNode = {};
            
            // 复制所有属性，但排除不需要的属性
            for (const key in node) {
                if (node.hasOwnProperty(key) && !['x', 'y', 'prevX', 'prevY', 'vy', 'vx', 'absX', 'absY'].includes(key)) {
                    filteredNode[key] = node[key];
                }
            }
            
            return filteredNode;
        }); 
        
        // 特别处理source和target，只保留ID而不是整个对象
        const filteredVisLinks = visLinks.map(link => {
            const filteredLink = {};
            
            // 复制所有属性，但排除不需要的属性
            for (const key in link) {
                if (link.hasOwnProperty(key)) {
                    // 处理source和target属性，确保它们只是ID而不是完整对象
                    if (key === 'source' || key === 'target') {
                        // 如果source或target是对象，只保留其ID属性
                        if (typeof link[key] === 'object' && link[key] !== null) {
                            filteredLink[key] = link[key].id;
                        } else {
                            filteredLink[key] = link[key];
                        }
                    } else if (!['x', 'y', 'prevX', 'prevY', 'vy', 'vx', 'absX', 'absY', 'relX', 'relY'].includes(key)) {
                        // 对于其他属性，排除不需要的属性
                        filteredLink[key] = link[key];
                    }
                }
            }
            
            return filteredLink;
        }); 
        

        console.log('正在写入处理后的数据...');
        writeJsData(visNodesFile, 'visNodes', filteredVisNodes);
        writeJsData(visLinksFile, 'visLinks', filteredVisLinks);
        
        console.log('预处理完成！');
        
    } catch (error) {
        console.error('处理过程中发生错误:', error);
        process.exit(1);
    }
}

// 执行主函数
if (require.main === module) {
    main();
}
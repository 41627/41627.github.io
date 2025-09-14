<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>数学符号与希腊字母参考表</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            padding: 20px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        header {
            text-align: center;
            margin-bottom: 30px;
            padding: 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        h1 {
            color: #2c3e50;
            margin-bottom: 10px;
        }
        
        .description {
            color: #7f8c8d;
            max-width: 800px;
            margin: 0 auto;
        }
        
        .search-container {
            display: flex;
            justify-content: center;
            margin: 20px 0;
        }
        
        #search {
            width: 100%;
            max-width: 500px;
            padding: 12px 20px;
            border: 2px solid #ddd;
            border-radius: 50px;
            font-size: 16px;
            outline: none;
            transition: border-color 0.3s;
        }
        
        #search:focus {
            border-color: #3498db;
        }
        
        .category-tabs {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-bottom: 20px;
            gap: 10px;
        }
        
        .category-tab {
            padding: 10px 20px;
            background: white;
            border-radius: 30px;
            cursor: pointer;
            transition: all 0.3s;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            border: 2px solid transparent;
        }
        
        .category-tab:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }
        
        .category-tab.active {
            background: #3498db;
            color: white;
            border-color: #2980b9;
        }
        
        .symbols-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
        }
        
        .category {
            background: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .category-title {
            color: #2c3e50;
            border-bottom: 2px solid #3498db;
            padding-bottom: 10px;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .symbol {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            border-bottom: 1px solid #eee;
            transition: background 0.2s;
        }
        
        .symbol:hover {
            background: #f9f9f9;
            border-radius: 5px;
        }
        
        .symbol-char {
            font-size: 24px;
            min-width: 50px;
            text-align: center;
        }
        
        .symbol-name {
            flex-grow: 1;
            padding: 0 15px;
        }
        
        .symbol-code {
            font-family: monospace;
            background: #f8f9fa;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 14px;
            color: #e74c3c;
        }
        
        .footer {
            text-align: center;
            margin-top: 40px;
            padding: 20px;
            color: #7f8c8d;
        }
        
        @media (max-width: 768px) {
            .symbols-grid {
                grid-template-columns: 1fr;
            }
            
            .category-tabs {
                flex-direction: column;
                align-items: center;
            }
            
            .category-tab {
                width: 100%;
                text-align: center;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>数学符号与希腊字母参考表</h1>
            <p class="description">本页面展示了如何在HTML中显示数学特殊符号和希腊字母，包括它们的名称和HTML实体代码。您可以使用搜索功能快速查找特定符号。</p>
        </header>
        
        <div class="search-container">
            <input type="text" id="search" placeholder="搜索符号名称或HTML代码...">
        </div>
        
        <div class="category-tabs">
            <div class="category-tab active" data-category="all">全部显示</div>
            <div class="category-tab" data-category="greek">希腊字母</div>
            <div class="category-tab" data-category="math">数学符号</div>
            <div class="category-tab" data-category="sets">集合论符号</div>
            <div class="category-tab" data-category="calculus">微积分符号</div>
        </div>
        
        <div class="symbols-grid">
            <!-- 希腊字母 -->
            <div class="category" data-category="greek">
                <h2 class="category-title"><i class="fas fa-sigma"></i> 希腊字母</h2>
                
                <div class="symbol">
                    <div class="symbol-char">α</div>
                    <div class="symbol-name">Alpha</div>
                    <div class="symbol-code">&amp;alpha;</div>
                </div>
                
                <div class="symbol">
                    <div class="symbol-char">β</div>
                    <div class="symbol-name">Beta</div>
                    <div class="symbol-code">&amp;beta;</div>
                </div>
                
                <div class="symbol">
                    <div class="symbol-char">γ</div>
                    <div class="symbol-name">Gamma</div>
                    <div class="symbol-code">&amp;gamma;</div>
                </div>
                
                <div class="symbol">
                    <div class="symbol-char">δ</div>
                    <div class="symbol-name">Delta</div>
                    <div class="symbol-code">&amp;delta;</div>
                </div>
                
                <div class="symbol">
                    <div class="symbol-char">ε</div>
                    <div class="symbol-name">Epsilon</div>
                    <div class="symbol-code">&amp;epsilon;</div>
                </div>
                
                <div class="symbol">
                    <div class="symbol-char">ζ</div>
                    <div class="symbol-name">Zeta</div>
                    <div class="symbol-code">&amp;zeta;</div>
                </div>
                
                <div class="symbol">
                    <div class="symbol-char">θ</div>
                    <div class="symbol-name">Theta</div>
                    <div class="symbol-code">&amp;theta;</div>
                </div>
                
                <div class="symbol">
                    <div class="symbol-char">π</div>
                    <div class="symbol-name">Pi</div>
                    <div class="symbol-code">&amp;pi;</div>
                </div>
                
                <div class="symbol">
                    <div class="symbol-char">Σ</div>
                    <div class="symbol-name">Sigma (大写)</div>
                    <div class="symbol-code">&amp;Sigma;</div>
                </div>
                
                <div class="symbol">
                    <div class="symbol-char">σ</div>
                    <div class="symbol-name">Sigma (小写)</div>
                    <div class="symbol-code">&amp;sigma;</div>
                </div>
                
                <div class="symbol">
                    <div class="symbol-char">Ω</div>
                    <div class="symbol-name">Omega (大写)</div>
                    <div class="symbol-code">&amp;Omega;</div>
                </div>
            </div>
            
            <!-- 数学符号 -->
            <div class="category" data-category="math">
                <h2 class="category-title"><i class="fas fa-plus"></i> 数学符号</h2>
                
                <div class="symbol">
                    <div class="symbol-char">∞</div>
                    <div class="symbol-name">无穷大</div>
                    <div class="symbol-code">&amp;infin;</div>
                </div>
                
                <div class="symbol">
                    <div class="symbol-char">√</div>
                    <div class="symbol-name">平方根</div>
                    <div class="symbol-code">&amp;radic;</div>
                </div>
                
                <div class="symbol">
                    <div class="symbol-char">∫</div>
                    <div class="symbol-name">积分</div>
                    <div class="symbol-code">&amp;int;</div>
                </div>
                
                <div class="symbol">
                    <div class="symbol-char">∑</div>
                    <div class="symbol-name">求和</div>
                    <div class="symbol-code">&amp;sum;</div>
                </div>
                
                <div class="symbol">
                    <div class="symbol-char">±</div>
                    <div class="symbol-name">加减号</div>
                    <div class="symbol-code">&amp;plusmn;</div>
                </div>
                
                <div class="symbol">
                    <div class="symbol-char">×</div>
                    <div class="symbol-name">乘号</div>
                    <div class="symbol-code">&amp;times;</div>
                </div>
                
                <div class="symbol">
                    <div class="symbol-char">÷</div>
                    <div class="symbol-name">除号</div>
                    <div class="symbol-code">&amp;divide;</div>
                </div>
                
                <div class="symbol">
                    <div class="symbol-char">≠</div>
                    <div class="symbol-name">不等于</div>
                    <div class="symbol-code">&amp;ne;</div>
                </div>
                
                <div class="symbol">
                    <div class="symbol-char">≈</div>
                    <div class="symbol-name">约等于</div>
                    <div class="symbol-code">&amp;asymp;</div>
                </div>
                
                <div class="symbol">
                    <div class="symbol-char">≤</div>
                    <div class="symbol-name">小于等于</div>
                    <div class="symbol-code">&amp;le;</div>
                </div>
                
                <div class="symbol">
                    <div class="symbol-char">≥</div>
                    <div class="symbol-name">大于等于</div>
                    <div class="symbol-code">&amp;ge;</div>
                </div>
            </div>
            
            <!-- 集合论符号 -->
            <div class="category" data-category="sets">
                <h2 class="category-title"><i class="fas fa-project-diagram"></i> 集合论符号</h2>
                
                <div class="symbol">
                    <div class="symbol-char">∈</div>
                    <div class="symbol-name">属于</div>
                    <div class="symbol-code">&amp;isin;</div>
                </div>
                
                <div class="symbol">
                    <div class="symbol-char">∉</div>
                    <div class="symbol-name">不属于</div>
                    <div class="symbol-code">&amp;notin;</div>
                </div>
                
                <div class="symbol">
                    <div class="symbol-char">⊂</div>
                    <div class="symbol-name">子集</div>
                    <div class="symbol-code">&amp;sub;</div>
                </div>
                
                <div class="symbol">
                    <div class="symbol-char">⊃</div>
                    <div class="symbol-name">超集</div>
                    <div class="symbol-code">&amp;sup;</div>
                </div>
                
                <div class="symbol">
                    <div class="symbol-char">∪</div>
                    <div class="symbol-name">并集</div>
                    <div class="symbol-code">&amp;cup;</div>
                </div>
                
                <div class="symbol">
                    <div class="symbol-char">∩</div>
                    <div class="symbol-name">交集</div>
                    <div class="symbol-code">&amp;cap;</div>
                </div>
                
                <div class="symbol">
                    <div class="symbol-char">∅</div>
                    <div class="symbol-name">空集</div>
                    <div class="symbol-code">&amp;empty;</div>
                </div>
            </div>
            
            <!-- 微积分符号 -->
            <div class="category" data-category="calculus">
                <h2 class="category-title"><i class="fas fa-chart-line"></i> 微积分符号</h2>
                
                <div class="symbol">
                    <div class="symbol-char">∂</div>
                    <div class="symbol-name">偏微分</div>
                    <div class="symbol-code">&amp;part;</div>
                </div>
                
                <div class="symbol">
                    <div class="symbol-char">∇</div>
                    <div class="symbol-name">Nabla算子</div>
                    <div class="symbol-code">&amp;nabla;</div>
                </div>
                
                <div class="symbol">
                    <div class="symbol-char">∮</div>
                    <div class="symbol-name">曲线积分</div>
                    <div class="symbol-code">&amp;oint;</div>
                </div>
                
                <div class="symbol">
                    <div class="symbol-char">′</div>
                    <div class="symbol-name">导数/素数</div>
                    <div class="symbol-code">&amp;prime;</div>
                </div>
            </div>
        </div>
        
        <div class="footer">
            <p>© 2023 数学符号参考表 | 使用HTML实体代码在网页中显示特殊符号</p>
        </div>
    </div>

    <script>
        // 搜索功能
        document.getElementById('search').addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const symbols = document.querySelectorAll('.symbol');
            
            symbols.forEach(symbol => {
                const name = symbol.querySelector('.symbol-name').textContent.toLowerCase();
                const code = symbol.querySelector('.symbol-code').textContent.toLowerCase();
                
                if (name.includes(searchTerm) || code.includes(searchTerm)) {
                    symbol.style.display = 'flex';
                } else {
                    symbol.style.display = 'none';
                }
            });
        });
        
        // 分类标签切换
        const categoryTabs = document.querySelectorAll('.category-tab');
        const categories = document.querySelectorAll('.category');
        
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const category = tab.getAttribute('data-category');
                
                // 更新活跃标签
                categoryTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // 显示/隐藏分类
                categories.forEach(cat => {
                    if (category === 'all' || cat.getAttribute('data-category') === category) {
                        cat.style.display = 'block';
                    } else {
                        cat.style.display = 'none';
                    }
                });
            });
        });
    </script>
</body>
</html>

</body>

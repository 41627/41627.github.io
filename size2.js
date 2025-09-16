// circleCalculations.js - 适配浏览器版本

// 计算每个圆的入度和出度
function calculateDegrees(circles, edges) {
    // 重置所有圆的度数
    circles.forEach(circle => {
        circle.inDegree = 0;
        circle.outDegree = 0;
    });
    
    // 计算度数
    edges.forEach(edge => {
        const sourceCircle = circles.find(c => c.id === edge.source);
        const targetCircle = circles.find(c => c.id === edge.target);
        
        if (sourceCircle) sourceCircle.outDegree++;
        if (targetCircle) targetCircle.inDegree++;
    });
    
    return circles.map(circle => ({
        id: circle.id,
        inDegree: circle.inDegree,
        outDegree: circle.outDegree
    }));
}

// 更新圆的半径
function updateCircleRadii(circles, minRadius = 15, maxRadius = 40) {
    // 找到最大权重值
    let maxWeight = 0;
    circles.forEach(circle => {
        const weight = circle.inDegree + 2 * circle.outDegree;
        if (weight > maxWeight) maxWeight = weight;
    });
    
    // 计算每个圆的半径
    const result = circles.map(circle => {
        const weight = circle.inDegree + 2 * circle.outDegree;
        let radius = minRadius;
        
        if (maxWeight > 0) {
            // 根据权重按比例计算半径
            radius = minRadius + (weight / maxWeight) * (maxRadius - minRadius);
        }
        
        return {
            id: circle.id,
            radius: radius
        };
    });
    
    return result;
}

// 主函数：返回包含id和半径的数组
function getCircleRadii(circles, edges) {
    // 首先计算度数
    calculateDegrees(circles, edges);
    
    // 然后计算半径
    return updateCircleRadii(circles);
}

// 将函数暴露到全局作用域，以便在HTML中直接使用
window.circleCalculations = {
    calculateDegrees,
    updateCircleRadii,
    getCircleRadii
};
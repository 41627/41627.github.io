// 连接数据
export const links = [
    // 下层连接
    { source: 1, target: 0, distance: 100 },
    { source: 2, target: 0, distance: 100 },
    { source: 3, target: 0, distance: 100 },
    { source: 5, target: 4, distance: 100 },
    { source: 6, target: 4, distance: 100 },
    { source: 7, target: 4, distance: 100 },
    { source: 8, target: 10, distance: 100 },
    { source: 9, target: 10, distance: 100 },
    { source: 11, target: 13, distance: 100 },
    { source: 12, target: 13, distance: 100 },
    { source: 14, target: 15, distance: 100 },
    { source: 2, target: 5, distance: 100 },
    { source: 3, target: 7, distance: 100 },
    { source: 6, target: 10, distance: 100 },
    { source: 8, target: 13, distance: 100 },
    { source: 9, target: 15, distance: 100 },
    
    // 上层连接
    { nodes: [16, 0], distance: 200, property: "" },
    { nodes: [16, 4], distance: 200, property: "" },
    { nodes: [17, 10], distance: 200, property: "" },
    { nodes: [17, 13], distance: 200, property: "" },
    { nodes: [18, 15], distance: 200, property: "" },
    { nodes: [18, 7], distance: 200, property: "" },
    { nodes: [19, 2], distance: 200, property: "" },
    { nodes: [19, 9], distance: 200, property: "" },
    
    // layer=0 到 layer=1 的连接
    { source: 20, target: 0, distance: 150 },
    { source: 20, target: 1, distance: 150 },
    { source: 20, target: 2, distance: 150 },
    { source: 21, target: 4, distance: 150 },
    { source: 21, target: 5, distance: 150 },
    { source: 21, target: 6, distance: 150 },
    
    // layer=-1 到 layer=1 的连接
    { source: 22, target: 10, distance: 200 },
    { source: 22, target: 11, distance: 200 },
    { source: 23, target: 13, distance: 100 },
    
    // layer=-2 到 layer=1 的连接
    { source: 24, target: 15, distance: 100 },
    { source: 25, target: 14, distance: 100 }
];

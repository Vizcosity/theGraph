var Graph = require('../graph');
var graph = new Graph();

graph.addVertices(['Home', 'A', 'B', 'C', 'D', 'E', 'F', 'Target']);

graph.addEdge('Home', 'A', {weight: 3});
graph.addEdge('Home', 'B', {weight: 2});
graph.addEdge('Home', 'C', {weight: 5});
graph.addEdge('A', 'D', {weight: 3});
graph.addEdge('B', 'E', {weight: 6});
graph.addEdge('B', 'D', {weight: 1});
graph.addEdge('C', 'E', {weight: 2});
graph.addEdge('D', 'F', {weight: 4});
graph.addEdge('E', 'F', {weight: 1});
graph.addEdge('E', 'Target', {weight: 4});
graph.addEdge('F', 'Target', {weight: 2});

console.log(graph.getShortestPath('Home', 'Target'));

# theGraph

A simple, minimalistic, no-nonsense graph library for Node.js.

### Installation
```JavaScript
  npm install theGraph
```

### Usage

```JavaScript
const Graph = require('theGraph');
var graph = new Graph();

// Add vertices.
graph.addVertices(['a', 'b', 'c', 'd']);

// Add vertices with associated objects.
graph.addVertex('f', {type: 'Character'});

// Add edges between nodes.
graph.addEdge('a', 'b');

// Edges an have associated objects (e.g. weight)
graph.addEdge('b', 'c', {weight: 20});

graph.addEdge('c', 'd', {relationship: 'Consecutive'});

// Find shortest path between nodes.
var path = graph.getShortestPath('a', 'd');
```

Happy graphing!

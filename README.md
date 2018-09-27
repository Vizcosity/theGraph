<p align="center">
<img height="200px" align="center" src="https://i.imgur.com/9vwD10z.png" />
</p>

<h1 style="border-bottom: none:" align="center">theGraph</h1>

<p align="center">A simple, minimalistic, no-nonsense graph library for Node.js.</p>



### Installation
```JavaScript
  npm install thegraph.io
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
<p align="center"><sub><strong>Made with ❤️ & ☕️ from 🇬🇮</strong></sub></p>

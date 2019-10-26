/*
PSEUDOCLASSICAL STYLE
Undirected Graph - Symmetrical | Edges are bi-directional (2 way street)
Directed Graph - Asymmetrical | Edges are one-directional (1 way street)

Graph operations:
* Add and remove nodes/vertices
* Add and remove edges
*/

// Instantiate a new graph
var Graph = function() {
  this._nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this._nodes[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this._nodes[node]) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) { // edges connected to that node are removed as well
  for (var key in this._nodes) {
    this.removeEdge(node, key);
  }
  delete this._nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this._nodes[fromNode][toNode]) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this._nodes[fromNode][toNode] = true;
  this._nodes[toNode][fromNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this._nodes[fromNode][toNode];
  delete this._nodes[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this._nodes) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

Graph.prototype.addNode - Constant O(1)
Graph.prototype.contains - Constant O(1)
Graph.prototype.removeNode - Linear O(n)
Graph.prototype.hasEdge - Constant O(1)
Graph.prototype.addEdge - Constant O(1)
Graph.prototype.removeEdge - Constant O(1)
Graph.prototype.forEachNode - Linear O(n)
*/


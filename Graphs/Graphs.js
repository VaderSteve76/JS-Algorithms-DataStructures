class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1,v2) {
    this.adjacencyList[v1].push[v2];
    this.adjacencyList[v2].push[v1];
  }

}

let g = new Graph();
// add vertices
g.addVertex("Tokyo");
g.addVertex("New York");
g.addVertex("Paris");
g.addVertex("London");

// add edges
g.addEdge("New York", "London");
g.addEdge("London", "Paris");
g.addEdge("London", "Tokyo");
g.addEdge("New York", "Paris");
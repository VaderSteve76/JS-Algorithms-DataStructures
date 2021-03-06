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

  removeEdge(vertex1,vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    );
  }

  removeVertex(vertex) {
    while(this.adjacencyList[vertex].length) {
      const adajcentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adajcentVertex);
    }
    delete this.adjacencyList[vertex];
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

// remove vertex
g.removeVertex("London");
g.removeVertex("New York");
g.removeVertex("Paris");
g.removeVertex("Tokyo");
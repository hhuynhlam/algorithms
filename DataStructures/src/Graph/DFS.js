const { vertices } = require('./Graph');

const VISITED = 'visited';

function DFS() {
  this.graph = vertices.map(vertex => ({
    adjacentVertices: vertex.adjacent,
    state: null,
    value: vertex.value,
  }));

  this.findVertex = value => (
    this.graph.find(vertex => vertex.value === value)
  );

  this.traverse = (value) => {
    const currentVertex = this.findVertex(value);

    console.log(currentVertex.value);
    currentVertex.state = VISITED;

    currentVertex.adjacentVertices.forEach((adjacentValue) => {
      const vertex = this.findVertex(adjacentValue);

      if (!vertex.state) {
        this.traverse(adjacentValue);
      }
    });
  };
}

module.exports = DFS;

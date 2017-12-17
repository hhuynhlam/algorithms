const Queue = require('../Queue/Queue');
const { vertices } = require('./Graph');

const DISCOVERED = 'discovered';
const VISITED = 'visited';

function BFS() {
  this.graph = vertices.map(vertex => ({
    adjacentVertices: vertex.adjacent,
    state: null,
    value: vertex.value,
  }));
  this.queue = new Queue();

  this.findVertex = value => (
    this.graph.find(vertex => vertex.value === value)
  );

  this.traverse = (value) => {
    const currentVertex = this.findVertex(value);

    if (!(currentVertex.state === VISITED)) {
      console.log(currentVertex.value);
      currentVertex.state = VISITED;
    }

    currentVertex.adjacentVertices.forEach((adjacentValue) => {
      const vertex = this.findVertex(adjacentValue);

      if (!vertex.state) {
        vertex.state = DISCOVERED;
        this.queue.enqueue(adjacentValue);
      }
    });

    if (this.queue.size()) {
      const next = this.queue.dequeue();

      this.traverse(next);
    }
  };
}

module.exports = BFS;

class Graph {
	constructor() {
		this.adjacencyList = {};
		this.results = [];
		this.visited = {};
	}

	addVertex(value) {
		if (this.adjacencyList[`${value}`]) return null;

		this.adjacencyList[`${value}`] = [];
	}

	getVertex(value) {
		if (this.adjacencyList[`${value}`]) undefined;

		return `${value}`;
	}

	addEdge(vertex1, vertex2) {
		const v1 = this.getVertex(vertex1);
		const v2 = this.getVertex(vertex2);

		this.adjacencyList[v1].push(v2);
		this.adjacencyList[v2].push(v1);
	}

	removeEdge(vertex1, vertex2) {
		const vertexOne = this.getVertex(vertex1);
		const vertexTwo = this.getVertex(vertex2);
		const itemInAdjacentList1 = this.adjacencyList[vertexOne];
		const itemInAdjacentList2 = this.adjacencyList[vertexTwo];

		const indexOfItemThatNeedToBeRemovedFromVertex1 =
			itemInAdjacentList1.indexOf(vertex2);
		const indexOfItemThatNeedToBeRemovedFromVertex2 =
			itemInAdjacentList1.indexOf(vertex1);

		itemInAdjacentList1.splice(indexOfItemThatNeedToBeRemovedFromVertex1, 1);
		itemInAdjacentList2.splice(indexOfItemThatNeedToBeRemovedFromVertex2, 1);
	}

	removeVertex(vertex) {
		if (this.adjacencyList[`${vertex}`]) undefined;

		for (const item in this.adjacencyList) {
			const listOfVertexConnections = this.adjacencyList[item];
			const indexOfConnectionThatNeedToBeRemoved =
				listOfVertexConnections.indexOf(vertex);

			if (indexOfConnectionThatNeedToBeRemoved === -1) continue;

			listOfVertexConnections.splice(indexOfConnectionThatNeedToBeRemoved, 1);
		}

		delete this.adjacencyList[`${vertex}`];
	}

	depthFirstRecursive(vertex) {
		const list = this.adjacencyList;

		const recursiveVisiting = (vertex) => {
			if (!vertex) return null;

			this.visited[`${vertex}`] = true;
			this.results.push(vertex);

			list[vertex].forEach((neighbor) => {
				if (!this.visited[neighbor]) {
					return this.depthFirstRecursive(neighbor);
				}
			});
		};

		recursiveVisiting(vertex);

		return this.results;
	}

	iterativeDFS(vertex) {
		const stack = [];
		const visited = {};
		const result = [];

		stack.push(vertex);
		let newVertex;

		while (stack.length !== 0) {
			newVertex = stack.pop();

			if (!visited[`${newVertex}`]) {
				result.push(newVertex);
				visited[`${newVertex}`] = true;

				this.adjacencyList[newVertex].forEach((neighbor) => {
					stack.push(neighbor);
				});
			}
		}

		return result;
	}

	bfs(startVertex) {
		const queue = [startVertex];
		const result = [];
		const visitedNodesObject = {};
		visitedNodesObject[`${startVertex}`] = true;
		let newVertex;

		while (queue.length) {
			newVertex = queue.shift();
			result.push(newVertex);

			this.adjacencyList[newVertex].forEach((neighbor) => {
				if (!visitedNodesObject[neighbor]) {
					visitedNodesObject[neighbor] = true;
					queue.push(neighbor);
				}
			});
		}

		return result;
	}
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
console.log(graph.bfs("A"));

//          A
//        /   \
//       B     C
//       |     |
//       D --- E

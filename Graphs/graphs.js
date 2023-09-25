class Node {
	constructor(value) {
		this.value = value;
	}
}

class Graph {
	constructor() {
		this.adjacencyList = {};
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
}

const graph = new Graph();
graph.addVertex("Aleksandar");
graph.addVertex("Sanela");
graph.addVertex("Cuki");
graph.addVertex("Nicc");
graph.addVertex("Banic");
graph.addEdge("Aleksandar", "Sanela");
graph.addEdge("Aleksandar", "Cuki");
graph.addEdge("Nicc", "Aleksandar");
graph.addEdge("Sanela", "Cuki");
graph.addEdge("Cuki", "Nicc");
graph.addEdge("Banic", "Nicc");
graph.addEdge("Banic", "Cuki");
graph.addEdge("Banic", "Sanela");

graph.removeVertex("Aleksandar");

console.log(graph);

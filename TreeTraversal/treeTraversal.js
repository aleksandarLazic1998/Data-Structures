class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		const newNode = new Node(value);

		if (this.root === null) {
			this.root = newNode;
			return this;
		}

		let currentNode = this.root;
		while (true) {
			if (value === currentNode.value) return undefined;

			if (newNode.value > currentNode.value) {
				if (!currentNode.right) {
					currentNode.right = newNode;
					return this;
				}
				currentNode = currentNode.right;
			} else {
				if (!currentNode.left) {
					currentNode.left = newNode;
					return this;
				}
				currentNode = currentNode.left;
			}
		}
	}

	find(value) {
		if (!this.root) return null;

		let currentNode = this.root;
		let isFound = false;
		while (true && !isFound) {
			if (value > currentNode.value) {
				if (currentNode.right.value === value) return currentNode.right;
				currentNode = currentNode.right;
			} else if (currentNode.left.value === value) {
				if (currentNode.left.value === value) return currentNode.left;
				currentNode = currentNode.left;
			} else {
				isFound = true;
			}
		}

		return currentNode;
	}

	breathFirstSearch() {
		const queue = [];
		const visited = [];

		if (!this.root) return visited;

		queue.push(this.root);

		let firstElement = this.root;

		while (queue.length !== 0) {
			visited.push(queue.shift().value);

			if (firstElement.left) {
				queue.push(firstElement.left);
			}

			if (firstElement.right) {
				queue.push(firstElement.right);
			}

			firstElement = queue[0];
		}

		return visited;
	}

	dfsPreOrder() {
		const visited = [];

		if (!this.root) return undefined;

		let current = this.root;
		visited.push(current.value);

		const traversePreOrder = (node) => {
			visited.push(node.value);

			if (node.left) traversePreOrder(node.left);
			if (node.right) traversePreOrder(node.right);
		};

		traversePreOrder(current.left);
		traversePreOrder(current.right);

		return visited;
	}

	dfsPostOrder() {
		const visited = [];

		if (!this.root) return undefined;

		let current = this.root;

		const traversePreOrder = (node) => {
			if (node.left) traversePreOrder(node.left);
			if (node.right) traversePreOrder(node.right);
			visited.push(node.value);
		};

		traversePreOrder(current);

		return visited;
	}

	dfsInOrder() {
		const visited = [];

		if (!this.root) return undefined;

		let current = this.root;

		const traversePreOrder = (node) => {
			if (node.left) traversePreOrder(node.left);
			visited.push(node.value);
			if (node.right) traversePreOrder(node.right);
		};

		traversePreOrder(current);

		return visited;
	}
}

const bts = new BinarySearchTree();

bts.insert(10);
bts.insert(15);
bts.insert(20);
bts.insert(6);
bts.insert(3);
bts.insert(8);

console.log(bts.dfsInOrder());

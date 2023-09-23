/*
Trees

Trees je slicna struktura kao Linked Lista ali sadrzi parent/child vrstu relationship
Trees je non linear data structure.


Trees imaju par pravila:

1. Mora da ima 1 root od kojeg polazi sve.
2. Root ili parent moze samo da point na child. Ne na sibling jer u tom slucaju to je Graph Data Strucutre.


Use cases for trees:
1. HTML DOM
2. Network Routing
3. Abstract Syntax trees
*/

/*
KInd of trees:
Trees
Binary Trees - Pravilo je da parent moze maksimalno 2 child korena da ima
Binary Search Trees
*/

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
}

const bts = new BinarySearchTree();

bts.insert(10);
bts.insert(15);
bts.insert(20);
bts.insert(6);
bts.insert(3);
bts.insert(8);
bts.insert(13);

console.log(bts.find(20));

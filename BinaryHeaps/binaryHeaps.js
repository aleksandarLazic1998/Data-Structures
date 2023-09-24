/*
Za Binary Heap postoji matematicka formula kako se data pakuje i kom node-u je koji children

Za svaki index od N
The left child is stored at 2*N+1
The right child is stored at 2*N+2

Za nalazenje parenta idemo naopako samo istu formulu
*/

class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}

	swap(i1, i2) {
		const value = this.values[i1];
		this.values[i1] = this.values[i2];
		this.values[i2] = value;
		return i2;
	}

	insert(value) {
		let newValue = value;

		this.values.push(newValue);

		if (this.values.length === 1) return this.values;
		let childIndex = this.values.length - 1;
		const childElement = this.values[childIndex];

		while (childIndex > 0) {
			let parentIndex = Math.floor((childIndex - 1) / 2);

			if (childElement > this.values[parentIndex]) {
				const newIndex = this.swap(childIndex, parentIndex);
				childIndex = newIndex;
			} else {
				break;
			}
		}

		return this.values;
	}

	sinkDown() {
		let idx = 0;
		const length = this.values.length;
		const element = this.values[0];

		while (true) {
			let leftChildIdx = 2 * idx + 1;
			let rightChildIdx = 2 * idx + 2;
			let leftChild, rightChild;
			let swap = null;

			if (leftChildIdx < length) {
				leftChild = this.values[leftChildIdx];
				if (leftChild < element) {
					swap = leftChildIdx;
				}
			}
			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx];
				if (
					(swap === null && rightChild > element) ||
					(swap !== null && rightChild > leftChild)
				) {
					swap = rightChildIdx;
				}
			}
			if (swap === null) break;
			this.values[idx] = this.values[swap];
			this.values[swap] = element;
			idx = swap;
		}
	}

	extractMax() {
		const max = this.values[0];
		const end = this.values.pop();

		if (this.values.length > 0) {
			this.values[0] = end;
			this.sinkDown();
		}

		return max;
	}
}

const maxBinaryHeap = new MaxBinaryHeap();

// maxBinaryHeap.insert(41);
// maxBinaryHeap.insert(33);
// maxBinaryHeap.insert(27);
// maxBinaryHeap.insert(39);
// maxBinaryHeap.insert(12);
// maxBinaryHeap.insert(18);
// maxBinaryHeap.insert(55);

// console.log(maxBinaryHeap.extractMax());
// console.log(maxBinaryHeap.extractMax());
// console.log(maxBinaryHeap.extractMax());
// console.log(maxBinaryHeap.extractMax());
// console.log(maxBinaryHeap.extractMax());
// console.log(maxBinaryHeap.extractMax());
// console.log(maxBinaryHeap.extractMax());

class Node {
	constructor(value, priority) {
		this.value = value;
		this.priority = priority;
	}
}

class PriorityQueue {
	constructor() {
		this.values = [];
	}

	swap(i1, i2) {
		const value = this.values[i1];
		this.values[i1] = this.values[i2];
		this.values[i2] = value;
		return i1;
	}

	enqueue(value, priority) {
		const newNode = new Node(value, priority);

		this.values.push(newNode);

		if (this.values.length === 1) return this.values;

		let childIndex = this.values.length - 1;
		const childElement = this.values[childIndex];

		while (childIndex > 0) {
			const parentIndex = Math.floor((childIndex - 1) / 2);
			const parentElement = this.values[parentIndex];

			if (childElement.priority < parentElement.priority) {
				const newIndex = this.swap(parentIndex, childIndex);
				childIndex = newIndex;
			} else {
				break;
			}
		}

		return this.values;
	}

	dequeue() {
		const listLength = this.values.length;

		if (listLength === 0) return undefined;

		let minElement = this.values.shift();

		let index = 0;
		this.swap(index, this.values.length - 1);

		while (true) {
			const leftIndex = Math.floor(index * 2 + 1);
			const rightIndex = Math.floor(index * 2 + 2);

			let leftElement;
			let rightElement;

			if (leftIndex < listLength) {
				leftElement = this.values[leftIndex];
			}
			if (rightIndex < listLength) {
				rightElement = this.values[rightIndex];
			}

			const rightChoice =
				leftElement?.priority < rightElement?.priority ? leftIndex : rightIndex;

			if (rightChoice < listLength) {
				const newIndex = this.swap(rightChoice, index);
				index = newIndex;
			}

			if (leftElement?.priority < rightElement?.priority) {
				const newIndex = this.swap(leftIndex, index);
				index = newIndex;
			} else if (rightElement?.priority < leftElement?.priority) {
				const newIndex = this.swap(rightIndex, index);
				index = newIndex;
			} else break;
		}

		return minElement;
	}
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("common cold", 5);
priorityQueue.enqueue("gunshot wound", 1);
priorityQueue.enqueue("high fevpriorityQueue", 4);
priorityQueue.enqueue("broken arm", 2);
priorityQueue.enqueue("glass in foot", 3);
priorityQueue.enqueue("Almost dead", 0);

console.log(priorityQueue.dequeue());
console.log(priorityQueue);

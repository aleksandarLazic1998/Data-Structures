/*
Doubly linked list.
Razlika izmedju je to sto doubly linked list pointuje na next i previous element.
*/

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.previous = null;
		this.isReversed = false;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(value) {
		const newNode = new Node(value);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			const currentTail = this.tail;

			this.tail.next = newNode;
			newNode.previous = currentTail;
			this.tail = newNode;
		}

		this.length++;
		return this;
	}

	pop() {
		const currentTail = this.tail;

		if (this.length === 0) return undefined;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = currentTail.previous;
			this.tail.next = null;
			currentTail.previous = null;
		}

		this.length--;

		return currentTail;
	}

	shift() {
		if (this.length === 0) return this;
		const currentHead = this.head;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = currentHead.next;
			this.head.previous = null;
			currentHead.next = null;
		}

		this.length--;

		return currentHead;
	}

	unshift(value) {
		const newNode = new Node(value);

		if (this.length === 0) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			const currentHead = this.head;

			this.head = newNode;
			this.head.next = currentHead;
			currentHead.previous = newNode;
		}

		this.length++;

		return this;
	}

	getItemAtPosition(position) {
		if (position < 0 || position >= this.length) return null;

		const start = 0;
		const end = this.length - 1;

		const diff1 = Math.abs(start - position);
		const diff2 = Math.abs(end - position);

		const startingPosition = diff1 < diff2 ? start : end;

		let counter = startingPosition;
		let head = this.head;
		let tail = this.tail;

		let currentNode;

		const isStartingFromHead = startingPosition === 0;

		while (counter !== position) {
			if (isStartingFromHead) {
				currentNode = head.next;
				head = head.next;
				counter++;
			} else {
				currentNode = tail.previous;
				tail = tail.previous;
				counter--;
			}
		}

		return currentNode;
	}

	setItem(position, value) {
		const nodeAtIndex = this.getItemAtPosition(position);
		nodeAtIndex.value = value;

		return this;
	}

	insertItem(position, value) {
		if (this.length === 0) this.push(value);
		if (position === this.length) this.unshift(value);

		const currentNode = this.getItemAtPosition(position);
		const beforeNode = this.getItemAtPosition(position - 1);
		const newNode = new Node(value);

		beforeNode.next = newNode;
		newNode.previous = beforeNode;

		newNode.next = currentNode;
		currentNode.previous = newNode;

		this.length++;
		return this;
	}

	remove(position) {
		if (this.length === 0) this.shift();
		if (position === this.length) this.pop();

		const currentNode = this.getItemAtPosition(position);
		const previousNode = this.getItemAtPosition(position - 1);
		const nextNode = this.getItemAtPosition(position + 1);

		previousNode.next = nextNode;
		nextNode.previous = previousNode;

		currentNode.next = null;
		currentNode.previous = null;

		this.length--;

		return currentNode;
	}

	reverse() {
		const node = this.head;
		this.head = this.tail;
		this.tail = node;

		let next;
		let previous;
		let currentHead = this.head;
		let currentTail = this.tail;

		let index = 0;

		while (index < this.length) {
			next = currentTail.previous;
			previous = currentHead.next;

			currentHead.next = next;
			currentTail.previous = previous;

			index++;
		}

		this.isReversed = !this.isReversed;

		return this;
	}

	print() {
		const arr = [];
		let current = this.head;

		while (current) {
			arr.push(current.value);
			current = this.isReversed ? current.previous : current.next;
		}

		return arr;
	}
}

const list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
console.log(list.print());

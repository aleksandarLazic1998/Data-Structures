/*
Stacks

Stacks su data collection data structure, abstract data structure.
Treba da se drzi samo jednog principa (LIFO)

LIFO - Last In First Out


Za Queue isto vazi samo je drugi princip (FIFO)
FIFO - First In First Out

 
BIG(0) OD Stacka
push() - 0(1)
pop() - 0(1)
searching() - 0(N)
access() - 0(N)
*/

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(value) {
		const newNode = new Node(value);

		if (this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			const temporaryValue = this.first;
			this.first = newNode;
			this.first.next = temporaryValue;
		}

		return this.size++;
	}

	pop() {
		if (this.size === 0) return "Stack is empty";

		let value;

		if (this.size === 1) {
			value = this.first.value;
			this.last = null;
		}

		let tempFirst = this.first;
		value = tempFirst;
		this.first = tempFirst.next;

		this.size--;

		return value;
	}
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

stack.pop();
console.log(stack);

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	addToQueue(value) {
		const node = new Node(value);

		if (this.size === 0) {
			this.first = node;
			this.last = node;
		} else {
			this.last.next = node;
			this.last = node;
		}

		return this.size++;
	}

	removeFromQueue() {
		if (this.size === 0) return "Stack is empty";

		const removedValue = this.first;

		if (this.first === this.last) {
			this.first = null;
			this.last = null;
		} else {
			const tempFirstNewValue = this.first.next;
			this.first = tempFirstNewValue;
		}

		this.size--;

		return removedValue.value;
	}
}

const queue = new Queue();

queue.addToQueue(1);
queue.addToQueue(2);
queue.addToQueue(3);
queue.addToQueue(4);
queue.addToQueue(5);

queue.removeFromQueue();
console.log(queue);

/*
Singly Linked List

Linearna data struktura koja nema index.
Svaki element linked liste je node.
Node moze bili koji data type i sadrzi pointer ka sledecem node-u.
Kraj linked liste naziva se tail. Tail = null

Ako zelimo da uzmemo item moramo uvek od pocetka da krenemo.

Singly linked list se zove tako zato sto je svaki node ima jednu konekciju ka sledecem.
*/

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(value) {
		const node = new Node(value);

		if (!this.head) {
			this.head = node;
			this.tail = this.head;
		} else {
			this.tail.next = node;
			this.tail = node;
		}

		this.length++;

		return this;
	}

	pop() {
		if (!this.head) return undefined;

		let current = this.head;
		let newTail = current;

		while (current.next) {
			newTail = current;
			current = newTail.next;
		}

		this.tail = newTail;
		this.tail.next = null;
		this.length--;

		if (this.length === 0) {
			this.head = null;
			this.tail = null;
			return null;
		}

		return newTail;
	}

	shift() {
		if (!this.head) return undefined;

		this.head = this.head.next;

		this.length--;

		return this;
	}

	unshift(value) {
		const newNode = new Node(value);

		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		}

		const currentHead = this.head;
		this.head = newNode;
		this.head.next = currentHead;

		this.length++;

		return this;
	}

	getItem(position) {
		if (position < 0 || position > this.length) return null;

		let currentItem = this.head;

		while (0 < position && currentItem.next) {
			currentItem = currentItem.next;
			position--;
		}

		return currentItem;
	}

	editItem(position, value) {
		const foundItem = this.getItem(position);

		if (!foundItem) return undefined;

		foundItem.value = value;

		return foundItem;
	}

	insertInto(position, value) {
		const previousNodePosition = this.getItem(position - 1);
		const currentNodeAtPosition = this.getItem(position);

		if (!currentNodeAtPosition || !previousNodePosition) return undefined;

		const newNode = new Node(value);

		previousNodePosition.next = newNode;
		newNode.next = currentNodeAtPosition;

		this.length++;

		return this;
	}

	removeItemAtPosition(position) {
		const itemAtCurrentPosition = this.getItem(position);
		const itemAtPreviousPosition = this.getItem(position - 1);

		if (!itemAtCurrentPosition || !itemAtPreviousPosition) return undefined;

		itemAtPreviousPosition.next = itemAtCurrentPosition.next;

		this.length--;

		return itemAtCurrentPosition;
	}

	reverse() {
		let node = this.head;
		this.head = this.tail;
		this.tail = node;

		let next;
		let prev = null;

		for (let i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}
		return this;
	}

	print() {
		const arr = [];
		let current = this.head;
		while (current) {
			arr.push(current.val);
			current = current.next;
		}
		return arr;
	}
}

const list = new SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
console.log(list.print());

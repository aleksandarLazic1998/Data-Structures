/* function hash(key, arrayLen) {
	let total = 0;
	for (let char of key) {
		// map "a" to 1, "b" to 2, "c" to 3, etc.
		let value = char.charCodeAt(0) - 96;
		total = (total + value) % arrayLen;
	}
	return total;
}

function hash(key, arrayLen) {
	let total = 0;
	let WEIRD_PRIME = 31;
	for (let i = 0; i < Math.min(key.length, 100); i++) {
		let char = key[i];
		let value = char.charCodeAt(0) - 96;
		total = (total * WEIRD_PRIME + value) % arrayLen;
	}
	return total;
}*/

class HashTable {
	constructor(size = 53) {
		this.keyMap = Array(size)
			.fill()
			.map(() => []);
	}

	_hash(key) {
		let total = 0;
		let WEIRD_PRIME = 31;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total * WEIRD_PRIME + value) % this.keyMap.length;
		}
		return total;
	}

	set(key, value) {
		const hashedKey = Math.abs(this._hash(key));

		this.keyMap[hashedKey].push([key, value]);
	}

	get(key) {
		const hashedKey = Math.abs(this._hash(key));
		if (!this.keyMap[hashedKey]) return undefined;

		const itemsAtHashedPosition = this.keyMap[hashedKey];

		let index = 0;
		let item;
		while (index < itemsAtHashedPosition.length) {
			if (itemsAtHashedPosition[index][0] === key) {
				itemsAtHashedPosition[index];
				item = itemsAtHashedPosition[index][1];
				break;
			}

			index++;
		}

		return item;
	}

	keys() {
		const hashMap = this.keyMap;
		const keys = [];
		for (let i = 0; i < hashMap.length; i++) {
			if (hashMap[i].length === 0) continue;

			keys.push(hashMap[i][0][0]);
		}

		return keys;
	}

	values() {
		const hashMap = this.keyMap;
		const values = [];
		for (let i = 0; i < hashMap.length; i++) {
			if (hashMap[i].length === 0) continue;

			if (hashMap[i].length > 1) {
				for (let j = 0; j < hashMap[i].length; j++) {
					values.push(hashMap[i][j][1]);
				}
			} else {
				values.push(hashMap[i][0][1]);
			}
		}

		return values;
	}
}

const hashTable = new HashTable();
hashTable.set("1", "1");
hashTable.set("2", "2");
hashTable.set("3", "3");
hashTable.set("3", "Nenad");
hashTable.set("4", "4");
hashTable.set("5", "5");
hashTable.set("6", "6");

console.log(hashTable.values());

import { HashTable } from "./hashTable.mjs";

class HashSet {
  constructor() {
    this.hasTable = new HashTable();
  }
  add(data) {
    if (this.hasTable.get(data) === null) {
      this.hasTable.set(data, -1);
    }
  }

  isContain(data) {
    return this.hasTable.get(data) !== null;
  }

  remove(data) {
    this.hasTable.remove(data);
  }

  clear() {
    for (let i = 0; i < this.hasTable.arr.length; i++) {
      this.hashTable.arr[i].clear();
    }
  }

  isEmpty() {
    let empth = true;
    for (let i = 0; i < this.hasTable.arr.length; i++) {
      if (this.hasTable.arr[i].count > 0) {
        empty = false;
        break;
      }
    }
    return empty;
  }
  printAll() {
    for (let i = 0; i < this.hashTable.arr.length; i++) {
      let currentNode = this.hasTable.arr[i].head;
      while (currentNode !== null) {
        console.log(currentNode.data.key);
        currentNode = currentNode.next;
      }
    }
  }
}

export { HashSet };

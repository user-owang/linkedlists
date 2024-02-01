/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const node1 = new Node(val);

    if (!this.head) {
      this.head = node1;
      this.tail = node1;
    } else {
      this.tail.next = node1;
      this.tail = node1;
    }
    this.length += 1;
  }

  // returns node at index of ind

  grab(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }
    let i = 0;
    let j = this.head;
    while (i !== idx) {
      j = j.next;
      i += 1;
    }
    return j;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const node1 = new Node(val);
    if (!this.tail) {
      this.tail = node1;
      this.head = node1;
    } else {
      node1.next = this.head;
      this.head = node1;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 1) {
      const val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return val;
    }
    const new_tail = this.grab(this.length - 2);
    let val = this.tail.val;
    this.tail = new_tail;
    new_tail.next = null;
    this.length -= 1;
    return val;
  }

  /** shift(): return & remove first item. */

  shift() {
    const val = this.head.val;
    if (this.length < 2) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length -= 1;
    return val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let node = this.grab(idx);
    return node.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let node = this.grab(idx);
    node.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx === 0) {
      return this.unshift(val);
    } else if (idx === this.length) {
      return this.push(val);
    }
    const node1 = new Node(val);
    let prev = this.grab(idx - 1);
    let aft = this.grab(idx);
    prev.next = node1;
    node1.next = aft;
    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }
    if (idx === 0) {
      return this.shift();
    }
    if (idx === this.length - 1) {
      return this.pop();
    }
    let prev = this.grab(idx - 1);
    let val = prev.next.val;
    prev.next = prev.next.next;
    this.length -= 1;
    return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      return 0;
    }
    let cur = this.head;
    let i = 0;
    let sum = 0;
    while (i < this.length) {
      sum += cur.val;
      i += 1;
      cur = cur.next;
    }
    return sum / this.length;
  }
}

module.exports = LinkedList;

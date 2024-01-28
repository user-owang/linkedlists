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

  grab(ind) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }
    let i = 0;
    let j = this.head;
    while (i !== ind) {
      j = j.next;
      i += 1;
    }
    return j;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const node1 = new Node(val);
    if (!this.tail) {
      this.tail = val;
      this.head = val;
    } else {
      node1.next = this.head;
      this.head = node1;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    const new_tail = this.grab(this.length - 2);
    let val = new_tail.next.val;
    this.tail = new_tail;
    new_tail.next = null;
    this.length -= 1;
    return val;
  }

  /** shift(): return & remove first item. */

  shift() {
    let val = this.head.val;
    this.head = this.head.next;
    this.length -= 1;
    if (this.length < 2) {
      this.head = this.tail;
    }
    return val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let node = grab(idx);
    return node.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let node = grab(idx);
    node.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx === 0) {
      return this.unshift(val);
    } else if (idx === this.length - 1) {
      return this.push(val);
    }
    const node1 = new Node(val);
    let prev = this.grab(idx - 1);
    let aft = this.grab(idx);
    prev.next = node1;
    node1.next = aft;
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

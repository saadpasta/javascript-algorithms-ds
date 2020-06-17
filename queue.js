class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {}

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (!this.first) return null;
    const holdingPointer = this.first.next;
    if (this.first === this.last) this.last = null;
    this.first = holdingPointer;
    this.length--;
  }
}

const myQueue = new Queue();
myQueue.enqueue("Joy");
myQueue.enqueue("Saad");
myQueue.dequeue();
myQueue.dequeue();

console.log(myQueue);

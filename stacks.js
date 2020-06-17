class Node {
  constructor(value) {
    this.top = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;

    console.log(this);
  }
  pop() {
    if (!this.top) return null;
    if (this.top === this.bottom) this.bottom = null;

    this.top = this.top.next;
    this.length--;
    console.log(this);
  }
}

const myStack = new Stack();
myStack.push("Google");
myStack.push("Amazon");
myStack.push("Udemy");

myStack.pop();
myStack.pop();
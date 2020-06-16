class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
  }

  append(value) {
    let new_node = {
      value,
      next: null,
    };

    this.tail.next = new_node;
    this.tail = new_node;
  }

  prepend(value) {
    let new_node = {
      value,
      next: null,
    };

    new_node.next = this.head;
    this.head = new_node;
  }

  insert(value, index) {
    let new_node = {
      value,
      next: null,
    };

    let leader_pointer = this.traverseToIndex(index - 1);

    let holding_pointer = leader_pointer.next;

    new_node.next = holding_pointer;

    leader_pointer.next = new_node;
  }

  remove(index) {
    let leader = this.traverseToIndex(index - 1);
    let remove_node = leader.next;

    leader.next = remove_node.next;
  }

  traverseToIndex(index) {
    let node = this.head;
    let pointer = 0;

    while (index !== pointer) {
      node = node.next;
      pointer++;
    }

    return node;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }

  reverse() {
    if (!this.head.next) return this.head;

    let first = this.head;

    let second = first.next;

    while (second) {
      let third = second.next;

      second.next = first;
      
      first = second;
      
      second = third;
    }
    this.head.next = null;
    this.head = first;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.append(12);
myLinkedList.append(13);
myLinkedList.prepend(0);
myLinkedList.insert(99, 3);

myLinkedList.remove(3);

myLinkedList.printList();

myLinkedList.reverse();
myLinkedList.printList();

// console.dir(myLinkedList, { depth: null });

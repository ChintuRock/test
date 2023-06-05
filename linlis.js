class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    append(data) {
      const newNode = new Node(data);
  
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
  
      this.length++;
    }
  
    prepend(data) {
      const newNode = new Node(data);
  
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
  
      this.length++;
    }
  
    insertAt(index, data) {
      if (index < 0 || index > this.length) {
        console.log('Invalid index');
        return;
      }
  
      if (index === 0) {
        this.prepend(data);
      } else if (index === this.length) {
        this.append(data);
      } else {
        const newNode = new Node(data);
        let currentNode = this.head;
        let previousNode = null;
        let currentIndex = 0;
  
        while (currentIndex < index) {
          previousNode = currentNode;
          currentNode = currentNode.next;
          currentIndex++;
        }
  
        newNode.next = currentNode;
        previousNode.next = newNode;
  
        this.length++;
      }
    }
  
    removeAt(index) {
      if (index < 0 || index >= this.length) {
        console.log('Invalid index');
        return;
      }
  
      let currentNode = this.head;
      let previousNode = null;
      let currentIndex = 0;
  
      if (index === 0) {
        this.head = currentNode.next;
        if (this.length === 1) {
          this.tail = null;
        }
      } else if (index === this.length - 1) {
        while (currentIndex < index) {
          previousNode = currentNode;
          currentNode = currentNode.next;
          currentIndex++;
        }
        previousNode.next = null;
        this.tail = previousNode;
      } else {
        while (currentIndex < index) {
          previousNode = currentNode;
          currentNode = currentNode.next;
          currentIndex++;
        }
        previousNode.next = currentNode.next;
      }
  
      this.length--;
    }
  
    display() {
      let currentNode = this.head;
      let elements = [];
  
      while (currentNode) {
        elements.push(currentNode.data);
        currentNode = currentNode.next;
      }
  
      console.log(elements.join(' -> '));
    }
  
    size() {
      return this.length;
    }
  
    isEmpty() {
      return this.length === 0;
    }
  }
  
  // Example usage:
  const linkedList = new LinkedList();
  
  linkedList.append(10);
  linkedList.append(20);
  linkedList.append(30);
  linkedList.prepend(5);
  linkedList.insertAt(2, 15);
  linkedList.removeAt(3);
  
  console.log('Linked List:');
  linkedList.display(); // Output: 5 -> 10 -> 15 -> 30
  
  console.log('Size:', linkedList.size()); // Output: 4
  
  console.log('Is Empty:', linkedList.isEmpty()); // Output: false
  
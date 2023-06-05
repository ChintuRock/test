class Queue {
    constructor() {
      this.items = [];
    }
    enqueue(element) {
      this.items.push(element);
    }
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.shift();
    }
    front() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[0];
    }
    isEmpty() {
      return this.items.length === 0;
    }
    size() {
      return this.items.length;
    }
    clear() {
      this.items = [];
    }
  }
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  console.log(queue.front()); // Output: 10
  console.log(queue.dequeue()); // Output: 10
  console.log(queue.size()); // Output: 2
  console.log(queue.isEmpty()); // Output: false
  queue.clear();
  console.log(queue.isEmpty()); // Output: true
  
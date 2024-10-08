
class Queue {
  constructor() {
    this.storage = [];
  }

  enqueue(item) {
    this.storage.push(item);
  }

  dequeue() {
    let item = this.storage.shift();
    return item;
  }

}

let q = new Queue();
q.enqueue("Alice");
q.enqueue("Bob");
q.enqueue("Carol");
console.log(q);
q.enqueue("Derek");
console.log(q);
let first = q.dequeue();
let next = q.peek();

class Stack {

  constructor() {
    this.storage = [];
  }

  // FOR Queue
  // enqueue, dequeue

  // FOR Stack
  // push, pop
  push(item) {
    this.storage.push(item);
  }


}

const s = new Stack();
s.push("Alice's Journal");
s.push("Bob's Journal");
s.push("Carol's Journal");
s.push("Derek's Journal");

console.log(s);

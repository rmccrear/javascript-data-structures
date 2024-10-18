
class Stack {

  #storage;

  constructor() {
    this.#storage = [];
  }

  // FOR Queue
  // enqueue, dequeue

  // FOR Stack
  // push, pop
  push(item) {
    this.#storage.push(item);
  }

  pop () {
    return this.#storage.pop();
  }
}

const s = new Stack();
s.push("Alice's Journal");
s.push("Bob's Journal");
s.push("Carol's Journal");
s.push("Derek's Journal");
s.push("Erin's Journal");

console.log("This is the contents of storage", s.#storage[3]);

// console.log(s);

// console.log(s.pop());
// console.log(s.pop());
// console.log(s.pop());
// console.log(s.pop());
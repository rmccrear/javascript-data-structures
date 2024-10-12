class Stack {

  constructor() {
    this.storage = [];
  }
  push(books) {
    this.storage.push(books);
  }
  pop() {
    this.storage.pop();
  }
  peek() {
    return this.storage[0];
  }
  isEmpty() {
    return this.storage.length === 0;
  }
};

let books = new Stack();
books.push("1984");
books.push("Utopia");
books.push("Brave New World");
books.push("Stranger in a Strange Land");
books.pop();
let p = books.peek();
let empty = books.isEmpty();

console.log(p);
console.log(empty);



console.log(books);



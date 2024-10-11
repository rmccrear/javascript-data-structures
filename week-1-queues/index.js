import Queue from './queues.js';

let books = new Queue();
books.enqueue("Naked Lunch");
books.enqueue("Game of Thrones");
books.enqueue("The Warehouse");
console.log(books);
books.enqueue("1984");
console.log(books);
let first = books.dequeue();
console.log(first);
let next = books.peek();
console.log(next);
let size = books.getSize();
console.log(size);
let isEmpty = books.isEmpty();
console.log(isEmpty);
console.log(books);
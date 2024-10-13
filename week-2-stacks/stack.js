class Stack {
    constructor() {
        this.storage = [];
    }
    push(item) {
        this.storage.push(item);
    }
    pop() {
        return this.storage.pop();
    }
    peek() {
        return this.storage[0]
    }
    isEmpty() {
        return this.storage.length === 0;
    }
};



const shows = new Stack();
console.log(shows);

shows.push("SOA");
console.log(shows);
shows.push("Severance");
console.log(shows);
shows.push("American Horror Story");
console.log(shows);
shows.push("Once Upon a Time");
console.log(shows);
//Pop removes the last item in the stack "Once Upon a Time" will be removed
let last = shows.pop();
console.log(last);
console.log(shows);
//Peek allows us to see the first item, doesn't remove an item
let first = shows.peek();
console.log(first);
//The first item is still in the stack
console.log(shows);
//isEmoty returns a boolean, checks if the stack length is 0.
let isEmpty = shows.isEmpty();
console.log(isEmpty);

//Kata
class Stack2 {
    constructor() {
        this.storage = [];
    }
    push(item) {
        this.storage.push(item)
    }
    pop() {
        return this.storage.pop();
    }
    peek() {
        return this.storage[0];
    }
    isEmpty() {
        return this.storage.length === 0;
    }
}

const books = new Stack2();
console.log(books);
books.push("The Celestine Prophecy");
console.log(books);
books.push("1984");
console.log(books);
books.push("The Odyssey");
console.log(books);
books.push("Moby Dick");
console.log(books);
books.push("Zoo");
console.log(books);

let lastBook = books.pop();
console.log(lastBook);
//Pop removes the last item in the stack "Zoo" will be removed
console.log(books);
//Peek allows us to see the first item, doesn't remove an item
let firstBook = books.peek();
console.log(firstBook);
//The first item is still in the stack
console.log(books);
//isEmoty returns a boolean, checks if the stack length is 0.
let isBooksEmpty = books.isEmpty();
console.log(isBooksEmpty);


//Private Property with Stack3
class Stack3 {

    #storage;

    constructor() {
        this.#storage = [];
    }
    push(item) {
        this.#storage.push(item);
    }
    pop() {
        return this.#storage.pop();
    }
    peek() {
        return this.#storage[0];
    }
    isEmpty() {
        return this.#storage.length === 0;
    }
}

const animals = new Stack3();
console.log(animals);
animals.push("dog");
console.log(animals);
animals.push("cat");
console.log(animals);
animals.push("bird");
console.log(animals);
animals.push("fish");
console.log(animals);
animals.push("lizard");
console.log(animals);
let lastAnimal = animals.pop();
console.log(lastAnimal);
console.log(animals);
let firstAnimal = animals.peek();
console.log(firstAnimal);
let isAnimalsEmpty = animals.isEmpty();
console.log(isAnimalsEmpty);


//Verifying that you can't have access to the stack storage
console.log(animals);
//Verifying access through peek and pop
console.log(animals.peek());
console.log(animals.pop());
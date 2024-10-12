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

let first = shows.pop();
console.log(first);
console.log(shows);

let last = shows.peek();
console.log(last);

let isEmpty = shows.isEmpty();
console.log(isEmpty);



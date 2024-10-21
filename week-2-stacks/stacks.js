
class Stack {
    
    #storage;

    constructor() {
        this.#storage = [];
    }
    push(names) {
        this.#storage.push(names);
    }
    pop() {
        return this.#storage.pop();
    }
    peek() {
        return this.#storage[this.#storage.length - 1];
    }
    isEmpty() {
        return this.#storage.length === 0;
    };
}

let s = new Stack();
s.push("Alice");
s.push("Beatrice");
s.push("Caroline");
console.log(s);

s.push("David");
console.log(s);

let first = s.peek();
console.log(first);

let pop = s.pop();
console.log(pop);

let empty = s.isEmpty();
console.log(empty);






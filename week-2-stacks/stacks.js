
class Stack {
    constructor() {
        this.items = [];
    }
    push(names) {
        this.items.push(names);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
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

let last = s.isEmpty();
console.log(last);
// console.log(s.isEmpty());



class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
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

let first = s.pop();
console.log(first);
let last = s.peek();
console.log(last);
console.log(s.isEmpty());
class Queue {
    constructor() {
        this.storage = [];
    }
    enqueue(item) {
        this.storage.push(item)
    }
    dequeue() {
        return this.storage.shift();
    }
    peek() {
        return this.storage[0];
    }
    isEmpty() {
        return this.storage.length === 0 ? true : false;
    }
}

class Stack {
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
        return this.storage[this.storage.length - 1];
    }
    isEmpty() {
        return this.storage.length === 0;
    }
}
//Problem 1
console.log("Problem 1:");
let queue = new Queue();
queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");
queue.enqueue("d");
console.log(queue);

let count = 0;
while(!queue.isEmpty()) {
     queue.dequeue();
     count++;
}
console.log(count);

//Problem 2
console.log("\nProblem 2:");
let stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
stack.push("D");
console.log(stack);


let stackCount = 0;
while(!stack.isEmpty()) {
     stack.pop();
     stackCount++;
}
console.log(stackCount)

//Problem 3
console.log("\nProblem 3:");
let queue1 = new Queue();
queue1.enqueue("choco");
queue1.enqueue("pistachio");
queue1.enqueue("choco");
queue1.enqueue("choco");
queue1.enqueue("pistachio");
console.log(queue1);

let queue2 = new Queue();
queue2.enqueue("pistachio");
queue2.enqueue("pistachio");
queue2.enqueue("choco");
queue2.enqueue("pistachio");
queue2.enqueue("choco");
console.log(queue2);

let pistachioCount1 = 0;
let pistachioCount2 = 0;

while(!queue1.isEmpty() && !queue2.isEmpty()){
        let a = queue1.dequeue();
        let b = queue2.dequeue();
        if(a === "pistachio") {
            pistachioCount1++;    
        }
        if(b === "pistachio") {
            pistachioCount2++
        }
        
}
console.log("Pistachio Count for Queue 1:", pistachioCount1);  
console.log("Pistachio Count for Queue 2:", pistachioCount2);
let result = pistachioCount1 === pistachioCount2 ? true : false;
console.log("Does each Queue have the same Number of Pistachio?", result);

//Problem 4
console.log("\nProblem 4:");
let stack1 = new Stack();
stack1.push("king");
stack1.push("king");
stack1.push("ace");
stack1.push("ace");
stack1.push("king");
console.log(stack1);

let stack2 = new Stack();
stack2.push("ace");
stack2.push("ace");
stack2.push("king");
stack2.push("ace");
stack2.push("ace");
console.log(stack2)

let aceCount1 = 0;
let aceCount2 = 0;

while(!stack1.isEmpty() && !stack2.isEmpty()){
        let a = stack1.pop();
        let b = stack2.pop();
        if(a === "ace") {
            aceCount1++;    
        }   
        if(b === "ace") {
            aceCount2++
        }
}
console.log("Ace Count for Stack 1:", aceCount1);
console.log("Ace Count for Stack 2:", aceCount2);
let aceResult = aceCount1 === aceCount2 ? true : false;
console.log("Does each Stack has the same Number of Aces?", aceResult);

//Problem 5
console.log("\nProblem 5:");
let queue3 = new Queue();
queue3.enqueue("zombie");
queue3.enqueue("vampire");
queue3.enqueue("witch");
queue3.enqueue("ghost");
console.log(queue3);

let queue4 = new Queue();
queue4.enqueue("zombie");
queue4.enqueue("vampire");
queue4.enqueue("witch");
queue4.enqueue("ghost");

// queue4.enqueue("ghost");
// queue4.enqueue("witch");
// queue4.enqueue("vampire");
// queue4.enqueue("zombie");


console.log(queue4);


let checkPairs;
while (!queue3.isEmpty() && !queue4.isEmpty()) {
    let pair1 = queue3.dequeue();
    let pair2 = queue4.dequeue();
    if (pair1 === pair2) {
        checkPairs = true;
    } else {
        checkPairs = false;
        break;
    }
}
console.log("Do we Have Pairs Entering the Party?", checkPairs);

//Problem 6
console.log("\nProblem 6:");
let stack3 = new Stack();
stack3.push("jack");
stack3.push("ace");
stack3.push("king");
stack3.push("queen");
stack3.push("ten");
console.log(stack3);

let stack4 = new Stack();
stack4.push("jack");
stack4.push("ace");
stack4.push("king");
stack4.push("queen");
stack4.push("ten");
// stack4.push("ace");
// stack4.push("king");
// stack4.push("queen");
// stack4.push("ten");
// stack4.push("jack");
console.log(stack4);

let checkPairs2;
while(!stack3.isEmpty() && !stack4.isEmpty()) {
    let pair1 = stack3.pop();
    let pair2 = stack4.pop();
    if(pair1 === pair2) {
        checkPairs2 = true;
    }else {
        checkPairs2 = false;
        break;
    }
    
}
console.log("Are the Stack of Cards in the Same Order?", checkPairs2);

//Problem 7
console.log("\nProblem 7:");
// A playlist manager using a Queue:

// addSong();
//  Adds new song to playlist.

// playNext();
//  Removes and returns the next song to be played from the front of the playlist. If the playlist is empty, return null.

// peekNext();
//  Returns the next song to be played without removing it.

// isEmpty();
//  Returns a boolean indicating whether the playlist is empty.

// Shuffle playlist...

//Problem 8
//TODO: Finish problem with only queue methods
console.log("\nProblem 8:");
let queue5 = new Queue();

while(!queue5.isEmpty()) {
        const j = Math.floor(Math.random() * (i + 1));
        queue5[i], queue5[j] = queue[j], queue5[i];
        return queue5;
}
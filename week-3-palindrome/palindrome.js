// TODO: Create Stack and Queue classes.


class Queue {
  constructor() {
    this.storage = []; // Array to store queue elements
  }

  // Add a new element to the queue
  enqueue(element) {
    this.storage.push(element);
  }

  // Remove and return the first element from the queue
  dequeue() {
    return this.storage.shift();
  }

  // Check if the queue is empty
  isEmpty() {
    return this.storage.length === 0;
  }

  // Return the current size of the queue
  size() {
    return this.storage.length;
  }
}

class Stack {

  constructor() {
    this.storage = [];
  }
  push(element) {
    this.storage.push(element);
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
};


function isPalindrome(str) {
  // TODO: instantiate the stack and queue
  let stack = new Stack();
  let queue = new Queue();

  // TODO: Step 1: Sanitize the input
  let sanitizedStr = str; 

  // TODO: Step 2: Push characters onto stack and enqueue them into queue
  for (let i=0; i< sanitizedStr.length; i++) {
    let char = sanitizedStr[i]; 

    stack.push(char);
    queue.enqueue(char);

  }

  // TODO: Step 3: Compare characters by popping from stack and dequeuing from queue
  while (!stack.isEmpty() && !queue.isEmpty()) {
    let a = stack.pop();
    let b = queue.dequeue();

      if (a !== b) {
          return "The string is not a palindrome.";
      }
  }

  return "The string is a palindrome.";
}

// Example usage:
let inputStr = "tacaascat";
console.log(isPalindrome(inputStr));

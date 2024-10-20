// TODO: Create Stack and Queue classes.

class Queue {
  constructor() {
    this.storage = [];
  }
  enqueue(item) {
    this.storage.push(item);
  }
  dequeue() {
    return this.storage.shift();
  }
  peek() {
    return this.storage[0];
  }
  getSize() {
    return this.storage.length;
  }
  isEmpty() {
    return this.storage.getSize() === 0;
  }

}

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
    return this.storage[this.storage.length - 1];
  }
  isEmpty() {
    return this.storage.length === 0;
  }

}

function isPalindrome(str) {
  // TODO: instantiate the stack and queue
  let stack = new Stack();
  let queue = new Queue();
  //regex to include all characters and whitespace /[!@#$%^&*()~`?/<>,.-=_+{}\[\]\s]/g
  // TODO: Step 1: Sanitize the input
  let sanitizedStr = str.toLowerCase().replace(/[,\s]/g, ''); //make lowercase and remove whitespace an commas
  // TODO: Step 2: Push characters onto stack and enqueue them into queue
  for (let i=0; i< sanitizedStr.length; i++) {
    let char = sanitizedStr[i]; 
    stack.push(char);
    queue.enqueue(char);
    
  }

  // TODO: Step 3: Compare characters by popping from stack and dequeuing from queue
  while (!stack.isEmpty()) {
    let a = stack.pop();
    let b = queue.dequeue();

      if (a !== b) {
          return "The string is not a palindrome.";
      }
  }

  return "The string is a palindrome.";
}

// Example usage:
// let inputStr = prompt("Enter a string to check for palindrome: "); 
let inputStr = "racecar"
let inputStr2 = "hello" 
let inputStr3 = "A man, a plan, a canal, Panama"

console.log(isPalindrome(inputStr));
console.log(isPalindrome(inputStr2));
console.log(isPalindrome(inputStr3));

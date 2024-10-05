export default class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        return this.items.shift();
    }
    peek() {
        if(this.items.length === 0) {
            console.log('This array is empty!')
        } else {
            return this.items[0];
        }
    }
    getSize() {
        return this.items.length;
    }
    isEmpty() {
        return this.getSize() === 0;
    }
}

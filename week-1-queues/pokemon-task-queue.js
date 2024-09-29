// Example: Task Queues

// Task queues are often used to manage asynchronous operations, allowing tasks to be executed one at a time, which helps in controlling the flow of execution and avoiding overwhelming resources.

// The FetchPokemonTaskQueue  fetches each Pokémon sequentially. This ensures that each request completes before proceeding to the next. It could be used to rate limit or to be sure that each request happened in a determined order.

// To runs this, type `node task-queue.js`
// You 

// Queue class to manage storage and handling of tasks
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

async function fetchPokemon(pokemonName) {
  // Fetch Pokémon data using async/await
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  const data = await response.json();

  // Log the fetched Pokémon data
  console.log(`Fetched Pokémon: ${data.name} (ID: ${data.id})`);

  // return the fetched Pokémon data
  return data;
}

// FetchPokemonTaskQueue class to manage Pokémon fetching tasks
class FetchPokemonTaskQueue {
  constructor(queueInstance) {
    this.queue = new Queue();
  }

  // Enqueue a Pokémon name to be fetched
  fetchPokemon(pokemonName) {
    this.queue.enqueue(pokemonName);
  }

  // Process the Pokémon names in the queue sequentially using a while loop
  async processQueue() {
    while (!this.queue.isEmpty()) {
      const pokemonName = this.queue.dequeue();
      const data = await fetchPokemon(pokemonName);
      // You could do something with the data here...
    }
  }
}

export { FetchPokemonTaskQueue, fetchPokemon };
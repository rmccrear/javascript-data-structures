import { FetchPokemonTaskQueue } from "./pokemon-task-queue.js";

// Create a new FetchPokemonTaskQueue using the queue instance
const taskQueue = new FetchPokemonTaskQueue();

// Add Pokémon names to the queue
taskQueue.fetchPokemon('pikachu');
taskQueue.fetchPokemon('charmander');
taskQueue.fetchPokemon('bulbasaur');
taskQueue.fetchPokemon('butterfree');
taskQueue.fetchPokemon('meowth');


// Start processing the queue sequentially using the processQueue method
taskQueue.processQueue();

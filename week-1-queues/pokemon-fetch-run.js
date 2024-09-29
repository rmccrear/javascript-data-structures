import { fetchPokemon } from "./pokemon-task-queue.js";

// Run this with `node pokemon-fetch-run.js`

// Note that the pokemon can be fetched in any order. Try it a few times and see the order change! 
// Compare this to the FetchPokemonTaskQueue class in pokemon-task-queue.js which will always in order.

fetchPokemon("pikachu");
fetchPokemon("charmander");
fetchPokemon("bulbasaur");
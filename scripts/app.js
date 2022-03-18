import { get_pokemon } from "../get_pokemons/get_pokemons.js";
import { pokemon_card } from "./components/card.js";
import { search_pokemon } from "./helpers/search_bar.js";

let container = document.querySelector(".card-container");
const search_button = document.querySelector("#search-button");
const search = document.querySelector("#search-bar");
const load_more_button = document.querySelector(".load_more");

search_button.addEventListener("click", () => {
  search_pokemon(search, container);
});

let more_pokemon = 250;
let load_more = async () => {
  for (let index = 1; index <= more_pokemon; index++) {
    const pokemon = await get_pokemon(index);

    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = pokemon_card(pokemon);

    container.appendChild(card);
  }
};

load_more();

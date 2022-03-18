import { get_pokemon } from "../../get_pokemons/get_pokemons.js";
import { pokemon_card } from "../components/card.js";

export const search_pokemon = async (search, container) => {
  let pokemon_data = await get_pokemon(search.value);
  let overlay = document.createElement("div");
  overlay.className = "overlay";

  let card = document.createElement("div");
  card.className = "card";
  card.innerHTML = pokemon_card(pokemon_data);
  overlay.appendChild(card);
  container.appendChild(overlay);

  overlay.addEventListener("click", () => {
    overlay.remove();
  });
};

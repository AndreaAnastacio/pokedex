const api_url = "https://pokeapi.co/api/v2/pokemon";

import { tiene_dos_tipos } from "../scripts/helpers/helpers.js";

export const get_pokemon = async (pokemon_name) => {
  const response = await fetch(`${api_url}/${pokemon_name}`);
  const data = await response.json();

  const pokemon = {
    nombre: data.name,
    tipo: tiene_dos_tipos(data.types),
    id: data.id,
    frame: data.sprites.other["official-artwork"].front_default,
    especie: data.species.name,
    estatura: data.height,
    peso: data.weight,
    hp: data.stats[0].base_stat,
    ataque: data.stats[1].base_stat,
    defensa: data.stats[2].base_stat,
    ataque_especial: data.stats[3].base_stat,
    defensa_especial: data.stats[4].base_stat,
    velocidad: data.stats[5].base_stat,
  };

  return pokemon;
};

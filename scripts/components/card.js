export const pokemon_card = (pokemon) => {
  const card = `
<div class="face front">
<div class="card-int">
  <div class="content">
    <div class="number"><h1>#${pokemon.id}</h1></div>
    <img
      class="imagen"
      src="${pokemon.frame}"
      alt=""
    />
    <div class="info">
      <div class="name"><h1>${pokemon.nombre}</h1></div>
      <div class="type">${pokemon.tipo}</div>
    </div>
  </div>
</div>
</div>
<div class="face back">
<div class="card-int2">
  <div class="back-content">
    <div class="number">
      <h1>#${pokemon.id}</h1>
      <img src="./assets/images/pokemon.png" alt="" />
    </div>
    <div class="info">
      <h4 class="name">${pokemon.nombre}</h4>
      <ul class="list">
        <li class="type">Tipo: ${pokemon.tipo}</li>
        <li class="species">Especie: ${pokemon.especie}</li>
        <li class="height">Estatura: ${pokemon.estatura}</li>
        <li class="weight">Peso: ${pokemon.peso}</li>
        <li class="hp">HP: ${pokemon.hp}</li>
        <li class="attack">Ataque: ${pokemon.ataque}</li>
        <li class="defense">Defensa: ${pokemon.defensa}</li>
        <li class="special-attack">Ataque especial: ${pokemon.ataque_especial}</li>
        <li class="special-defense">Defensa especial: ${pokemon.defensa_especial}</li>
        <li class="speed">Velocidad: ${pokemon.velocidad}</li>
      </ul>
    </div>
  </div>
</div>
</div>
`;

  return card;
};

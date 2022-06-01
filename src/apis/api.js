import { GET_POKEMON_LIST_URL } from "../common/common";

export const getPokemon = async () => {
  try {
    const response = await fetch(GET_POKEMON_LIST_URL);
    const { results } = await response.json();
    return Promise.all(
      results.map((pokemon) => fetch(pokemon.url).then((res) => res.json()))
    );
  } catch (error) {
    throw new Error(`Error while retrieving data: ${error}`);
  }
};

export const getPokemonImage = (pokemonDataUrl) => {};

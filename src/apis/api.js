import { GET_POKEMON_LIST_URL } from "../common/common";

export const getPokemon = async () => {
  const pokemonData = fetch(GET_POKEMON_LIST_URL)
    .then((res) => res.json())
    .catch((e) => {
      throw new Error(`Received error message: ${e}`);
    });
  return pokemonData;
};

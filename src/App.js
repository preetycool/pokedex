import "./App.css";
import { useEffect, useState } from "react";
import { getPokemon } from "./apis/api";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function getPokemonList() {
      try {
        const pokemon = await getPokemon();
        setPokemonList(pokemon.results);
      } catch (e) {
        console.log(e);
      }
    }
    getPokemonList();
  }, []);

  console.log(pokemonList);

  if (!pokemonList.length) {
    return <h1>...Loading</h1>;
  }

  return (
    <div className='App'>
      {pokemonList.map((pokemon) => (
        <h1 key={pokemon.name}>{pokemon.name}</h1>
      ))}
    </div>
  );
}

export default App;

import "./App.scss";
import { useEffect, useState } from "react";
import { getPokemon } from "./apis/api";
import Loader from "./components/Loader/Loader";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function getPokemonList() {
      try {
        const pokemon = await getPokemon();
        setPokemonList(pokemon);
      } catch (e) {
        console.log(e);
      }
    }
    getPokemonList();
  }, []);

  if (!pokemonList.length) {
    return <Loader subtitle='Getting the pokemon ready' />;
  }

  return (
    <div className='App'>
      {pokemonList.map((pokemon) => (
        <>
          <img
            src={pokemon.sprites.other["official-artwork"]["front_default"]}
            alt='pic'
          />
          <h1 key={pokemon.name}>{pokemon.name}</h1>
        </>
      ))}
    </div>
  );
}

export default App;

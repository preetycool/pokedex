import "./App.scss";
import { useEffect, useState } from "react";
import { getPokemon } from "./apis/api";
import Loader from "./components/Loader/Loader";
import EveryPokemonPage from "./containers/EveryPokemonPage/EveryPokemonPage";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentFilteredPokemonList, setCurrentFilteredPokemonList] = useState(
    []
  );

  useEffect(() => {
    async function getPokemonList() {
      try {
        const pokemon = await getPokemon();
        setPokemonList(pokemon);
        setCurrentFilteredPokemonList(pokemon);
      } catch (e) {
        console.log(e);
      }
    }
    getPokemonList();
  }, []);

  if (!pokemonList.length) {
    return <Loader subtitle='Getting the pokemon ready' />;
  }

  const handleSearchInputChange = (e) => {
    const searchValue = e.target.value.toLowerCase();

    const filteredPokemonList = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().startsWith(searchValue)
    );
    setCurrentFilteredPokemonList(filteredPokemonList);
  };

  return (
    <div className='App'>
      <Navbar />
      <SearchBar
        placeholderText='Search a pokemon here!'
        handleChange={handleSearchInputChange}
      />
      <EveryPokemonPage pokemonList={currentFilteredPokemonList} />
    </div>
  );
}

export default App;

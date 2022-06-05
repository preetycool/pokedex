import "./App.scss";
import { useEffect, useState } from "react";
import { getPokemon } from "./apis/api";
import Loader from "./components/Loader/Loader";
import EveryPokemonPage from "./containers/EveryPokemonPage/EveryPokemonPage";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import Pagination from "./components/Pagination/Pagination";
import { POKEMON_TEXT } from "./common/common";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentFilteredPokemonList, setCurrentFilteredPokemonList] = useState(
    []
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage] = useState(8);

  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPokemons = currentFilteredPokemonList.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
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
    return <Loader subtitle={`Getting the ${POKEMON_TEXT} ready`} />;
  }

  const handleSearchInputChange = (e) => {
    setCurrentPage(1);
    const searchValue = e.target.value.toLowerCase();

    const filteredPokemonList = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().startsWith(searchValue)
    );
    setCurrentFilteredPokemonList(filteredPokemonList);
  };

  const handlePaginationLinkOnClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='App'>
      <Navbar />
      <SearchBar
        placeholderText='Search Pokemon here!'
        handleChange={handleSearchInputChange}
      />
      <EveryPokemonPage pokemonList={currentPokemons} />
      <Pagination
        pokemonPerPage={pokemonPerPage}
        totalPokemon={currentFilteredPokemonList.length}
        handleOnClick={handlePaginationLinkOnClick}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;

import PokemonTile from "../../components/PokemonTile/PokemonTile";
import "./EveryPokemonPage.scss";

const EveryPokemonPage = ({ pokemonList }) => {
  return (
    <div className='pokemon-page'>
      {pokemonList.map((pokemon) => (
        <PokemonTile
          key={pokemon.name}
          pokemonName={pokemon.name}
          imageSrc={pokemon.sprites.other["official-artwork"]["front_default"]}
        />
      ))}
    </div>
  );
};

export default EveryPokemonPage;

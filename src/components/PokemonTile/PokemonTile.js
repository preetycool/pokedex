import "./PokemonTile.scss";

const PokemonTile = ({ imageSrc, pokemonName, pokemonId }) => {
  return (
    <div className='pokemon-tile'>
      <img className='pokemon-tile__image' src={imageSrc} alt='pokemon' />
      <p className='pokemon-tile__number'>{`#${pokemonId}`}</p>
      <p className='pokemon-tile__text'>{pokemonName}</p>
    </div>
  );
};

export default PokemonTile;

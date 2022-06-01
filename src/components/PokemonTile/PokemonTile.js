import "./PokemonTile.scss";

const PokemonTile = ({ imageSrc, pokemonName }) => {
  return (
    <div className='pokemon-tile'>
      <img className='pokemon-tile__image' src={imageSrc} alt='pokemon' />
      <p className='pokemon-tile__text'>{pokemonName}</p>
    </div>
  );
};

export default PokemonTile;

import "./PokemonTile.scss";

const PokemonTile = ({
  imageSrc,
  pokemonName,
  pokemonId,
  pokemonTypes = [],
}) => {
  return (
    <div className='pokemon-tile'>
      <img className='pokemon-tile__image' src={imageSrc} alt='pokemon' />
      <p className='pokemon-tile__number'>{`#${pokemonId}`}</p>
      <p className='pokemon-tile__text'>{pokemonName}</p>
      {!!pokemonTypes.length && (
        <div className='pokemon-type'>
          {pokemonTypes.map(({ type: { name } }) => (
            <p className={`pokemon-type-${name}`} key='type'>
              {name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonTile;

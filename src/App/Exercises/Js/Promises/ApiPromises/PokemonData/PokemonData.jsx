import { typesIcon } from '../Utiles/utiles';

export function PokemonData({ pokemonData }) {
  const getTypeOfPokemon = (typeOfPokemon = []) =>
    typesIcon[typeOfPokemon[0].type.name];

  return (
    <>
      <img
        className="imageOfPokemon"
        src={pokemonData.sprites.front_default}
        alt={pokemonData.name}
      />
      <h3>Name: {pokemonData?.name}</h3>
      <p>Weight: {pokemonData?.weight}</p>
      <p>Height: {pokemonData?.height}</p>
      <p>Type: {getTypeOfPokemon(pokemonData?.types)}</p>
    </>
  );
}

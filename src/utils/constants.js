export const PAGE_PARAM = "page";
export const POKEMONS_PER_PAGE = 10;

export const getPokemonIdUrl = (id) =>
  `https://pokeapi.co/api/v2/pokemon/${id}`;

export const getPokeApiUrl = (limit = 50) =>
  `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;

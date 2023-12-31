import { useEffect, useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import { useSearchParams } from "react-router-dom";
import {
  PAGE_PARAM,
  POKEMONS_PER_PAGE,
  getPokeApiUrl,
} from "../utils/constants";

function chunk(array, chunkSize) {
  const chunkedArray = [];
  for (let i = 0; i < array?.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    chunkedArray.push(chunk);
  }
  return chunkedArray;
}

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [pokemons, setPokemons] = useState(null);
  const [pokemonsToShow, setPokemonsToShow] = useState([]);

  const page = searchParams.get(PAGE_PARAM);
  const totalPages = pokemons?.length / POKEMONS_PER_PAGE;

  useEffect(() => {
    if (!searchParams.get(PAGE_PARAM)) {
      searchParams.set(PAGE_PARAM, 1);
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    fetch(getPokeApiUrl(100))
      .then((response) => response.json())
      .then((data) => setPokemons(data.results));
  }, []);

  useEffect(() => {
    if (pokemons) {
      setPokemonsToShow(chunk(pokemons, POKEMONS_PER_PAGE));
    }
  }, [pokemons]);

  return (
    <div
      style={{
        maxWidth: "1440px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {pokemonsToShow?.[page - 1]?.map((pokemon) => (
          <Card key={pokemon.id} url={pokemon.url} />
        ))}
      </div>
      <Pagination pages={totalPages} />
    </div>
  );
}

export default Home;

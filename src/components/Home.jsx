import { useEffect, useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import { useSearchParams } from "react-router-dom";
import { PAGE_PARAM } from "../utils/constants";

function chunk(array, chunkSize) {
  const chunkedArray = [];
  for (let i = 0; i < array?.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    chunkedArray.push(chunk);
  }
  return chunkedArray;
}

function Home() {
  const perPage = 10;

  const [searchParams] = useSearchParams();
  const [pokemons, setPokemons] = useState(null);
  const [pokemonsToShow, setPokemonsToShow] = useState([]);

  const page = searchParams.get(PAGE_PARAM);
  const totalPages = pokemons?.length / perPage;

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then((response) => response.json())
      .then((data) => setPokemons(data.results));
  }, []);

  useEffect(() => {
    if (pokemons) {
      setPokemonsToShow(chunk(pokemons, perPage));
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

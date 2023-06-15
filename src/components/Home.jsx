import { useEffect, useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";

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

  const [pokemons, setPokemons] = useState(null);
  const [pokemonsToShow, setPokemonsToShow] = useState([]);
  const [page, setPage] = useState(0);

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

  console.log({ pokemons });

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
        {pokemonsToShow?.[page]?.map((pokemon) => (
          <Card url={pokemon.url} />
        ))}
      </div>
      <Pagination currentPage={page} pages={totalPages} setPage={setPage} />
    </div>
  );
}

export default Home;

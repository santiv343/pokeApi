import { useEffect, useState } from "react";
import Loader from "./Loader";
import { useNavigate, useParams } from "react-router";
import { getPokemonIdUrl } from "../utils/constants";

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const url = getPokemonIdUrl(id);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, [url]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {!pokemon ? (
        <Loader />
      ) : (
        <div
          style={{
            display: "flex",
            backgroundColor: "slategray",
            borderRadius: "20px",
          }}
        >
          <div style={{ width: "60%", minWidth: "300px" }}>
            <img
              height="100%"
              width="100%"
              maxWidth="500px"
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt="pokemon"
            />
          </div>
          <div style={{ width: "40%" }}>
            <h2 style={{ fontSize: "48px", textTransform: "capitalize" }}>
              {pokemon.name}
            </h2>
            {pokemon.types.map(({ type }) => {
              console.log({ type });
              return <p style={{ textTransform: "capitalize" }}>{type.name}</p>;
            })}
            <button
              style={{ height: "fit-content" }}
              onClick={() => navigate(-1)}
            >
              BACK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;

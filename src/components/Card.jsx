import { useEffect, useState } from "react";
import Loader from "./Loader";
import { Link } from "react-router-dom";

function Card({ url }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [url]);

  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: "aqua",
        borderRadius: "10px",
        margin: "10px",
      }}
    >
      {!data ? (
        <Loader />
      ) : (
        <Link to={`pokemon/${data.id}`}>
          <img
            width={150}
            height={150}
            src={data?.sprites?.other?.dream_world?.front_default}
            alt="img"
          />
          <h4 style={{ textTransform: "capitalize" }}>{data.name}</h4>
        </Link>
      )}
    </div>
  );
}

export default Card;

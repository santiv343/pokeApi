import { useEffect, useState } from "react";
import Loader from "./Loader";

function Card({ url }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [url]);

  // console.log({ data });

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
        <>
          <img
            width={150}
            height={150}
            src={data?.sprites?.other?.dream_world?.front_default}
            alt="img"
          />
          <h4 style={{ textTransform: "capitalize" }}>{data.name}</h4>
        </>
      )}
    </div>
  );
}

export default Card;

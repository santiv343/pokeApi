import { useSearchParams } from "react-router-dom";
import { PAGE_PARAM } from "../utils/constants";
import PaginationPokeball from "./Pagination/PaginationPokeball";

function Pagination({ pages }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get(PAGE_PARAM));

  const handlePageChange = (page) => {
    if (page <= pages && page > 0) {
      searchParams.set(PAGE_PARAM, page);
      setSearchParams(searchParams);
    }
  };
  const getPageButtons = () => {
    let buttons = [];
    for (let i = 1; i <= pages; i++) {
      buttons.push(
        page === i ? (
          <PaginationPokeball
            style={{
              cursor: "pointer",
            }}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </PaginationPokeball>
        ) : (
          <button
            key={`button${i}`}
            style={{
              cursor: "pointer",
              margin: "0px 8px",
              width: "40px",
              height: "40px",
              padding: "8px",
              backgroundColor: page === i ? "red" : "inherit",
              borderRadius: "20px",
            }}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        )
      );
    }
    return buttons;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
        padding: "20px 0",
      }}
    >
      <button
        disabled={page === 1}
        onClick={() => handlePageChange(page - 1)}
        style={{
          width: "40px",
          height: "40px",
          padding: "8px",
          borderRadius: "20px",
        }}
      >
        <div>{`<`}</div>
      </button>
      {getPageButtons()}
      <button
        disabled={page === pages}
        onClick={() => handlePageChange(page + 1)}
        style={{
          width: "40px",
          height: "40px",
          padding: "8px",
          borderRadius: "20px",
        }}
      >
        {`>`}
      </button>
    </div>
  );
}

export default Pagination;

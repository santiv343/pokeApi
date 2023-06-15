import { useSearchParams } from "react-router-dom";
import { PAGE_PARAM } from "../utils/constants";

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
        <button
          key={`button${i}`}
          style={{
            margin: "0px 8px",
            padding: "8px",
            backgroundColor: page === i ? "red" : "inherit",
          }}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div style={{ display: "flex", margin: "0 auto", padding: "20px 0" }}>
      <button disabled={page === 1} onClick={() => handlePageChange(page - 1)}>
        Back
      </button>
      {getPageButtons()}
      <button
        disabled={page === pages}
        onClick={() => handlePageChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;

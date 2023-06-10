function Pagination({ currentPage, pages, setPage }) {
  const getPageButtons = () => {
    let buttons = [];
    for (let i = 0; i < pages; i++) {
      buttons.push(
        <button
          style={{
            margin: "0px 8px",
            padding: "8px",
            backgroundColor: currentPage === i ? "red" : "inherit",
          }}
          onClick={() => setPage(i)}
        >
          {i + 1}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div style={{ display: "flex", margin: "0 auto", padding: "20px 0" }}>
      <button
        disabled={currentPage === 0}
        onClick={() => setPage(currentPage - 1)}
      >
        Back
      </button>
      {getPageButtons()}
      <button
        disabled={currentPage === pages - 1}
        onClick={() => setPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;

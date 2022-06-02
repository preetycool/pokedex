import { useState } from "react";
import "./Pagination.scss";

const Pagination = ({
  pokemonPerPage,
  totalPokemon,
  handleOnClick,
  currentPage,
}) => {
  const [maxLimit] = useState(10);
  const [currentPageRange, setCurrentPageRange] = useState([]);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPokemon / pokemonPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <li key={number} className='page-item'>
            <button
              onClick={() => handleOnClick(number)}
              href='#'
              className={`page-link ${
                currentPage === number ? "page-link--active" : ""
              }`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

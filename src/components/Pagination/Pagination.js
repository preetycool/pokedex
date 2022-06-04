import { useState } from "react";
import "./Pagination.scss";

const Pagination = ({
  pokemonPerPage,
  totalPokemon,
  handleOnClick,
  currentPage,
}) => {
  const [maxLimit] = useState(10);
  const [currentBeginningPageNumber, setCurrentBeginningPageNumber] =
    useState(0);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPokemon / pokemonPerPage); i++) {
    pageNumbers.push(i);
  }

  const onForwardClick = () => {
    setCurrentBeginningPageNumber((prev) => prev + maxLimit);
  };

  const onBackClick = () => {
    setCurrentBeginningPageNumber((prev) => prev - maxLimit);
  };

  return (
    <nav className='pagination'>
      {currentBeginningPageNumber > 0 && (
        <button class='pagination__button' onClick={onBackClick}>
          🡸
        </button>
      )}
      <ul className='pagination__list'>
        {pageNumbers.map((number, index) => {
          if (
            index >= maxLimit + currentBeginningPageNumber ||
            index < currentBeginningPageNumber
          ) {
            return null;
          } else {
            return (
              <li key={number} className='list-item'>
                <button
                  onClick={() => handleOnClick(number)}
                  href='#'
                  className={`list-item__link ${
                    currentPage === number ? "list-item__link--active" : ""
                  }`}
                >
                  {number}
                </button>
              </li>
            );
          }
        })}
      </ul>
      {pageNumbers.length - currentBeginningPageNumber > 10 && (
        <button class='pagination__button' onClick={onForwardClick}>
          🢂
        </button>
      )}
    </nav>
  );
};

export default Pagination;

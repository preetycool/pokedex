import "./SearchBar.scss";

const SearchBar = ({ placeholderText, handleChange }) => {
  return (
    <div className='search-bar'>
      <input
        name='search'
        placeholder={placeholderText}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;

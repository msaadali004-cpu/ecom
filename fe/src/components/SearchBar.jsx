const SearchBar = ({ value, onChange, onKeyDown, className = '' }) => {
  return (
    <div className={`search-bar ${className}`}>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={onKeyDown}
        placeholder="Search wigs, serums, or categories"
        aria-label="Search products"
      />
    </div>
  )
}

export default SearchBar

function Search({ search, setSearch }) {
  return (
    <div className="search-box">
      <h2>Search</h2>
      <input 
        type="text" 
        placeholder='Search name...' 
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
      />
    </div>
  );
}
export default Search
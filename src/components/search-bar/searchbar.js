const Searchbar = ({handleSearch, getText}) => {
    return (
        <div className="divsearch">
            <form onSubmit={getText}>
            <input className="searchInput" type="text" onChange={handleSearch}/>
            <button className="searchBtn" type="submit">Search</button>
        </form>    
        </div>    
    )
}

export default Searchbar;
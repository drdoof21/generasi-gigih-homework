const Searchbar = ({handleSearch, getText}) => {
    return (
        <form onSubmit={getText}>
            <input type="text" onChange={handleSearch}/>
            <button type="submit">Search</button>
        </form>        
    )
}

export default Searchbar;
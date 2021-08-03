import '../../App.css';
// import { Navbar } from 'react-bootstrap';
const Navbar = ({createPlaylist,listofPlaylist, handleTitle, handleDescription}) => {
    return(
        <div className="sidebar">
            <a><b>Spotify</b></a>
            <a><b>Home</b></a>
            <a><b>Search</b></a>
            <form onSubmit={createPlaylist}>
                <label>
                    Title
                    <input type="text" onChange={handleTitle}/>
                </label>
                <label>
                    Description
                    <textarea rows="4" onChange={handleDescription}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
            
            {listofPlaylist}
        </div>

    )
}

export default Navbar;
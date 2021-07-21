// import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../../dummytracks';
import Song from '../../components/song/song';
import '../../App.css';
import Login from '../../components/login/login';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


const Home = () => {
    const clientID = process.env.REACT_APP_SPOTIFY_KEY;
    let numb = 0;
    
    const playlist = 
        data.map((product) =>
        <Song key={product.id} number={numb += 1} url={product.album.images[0].url} album={product.album.name} track={product.name}
        artistName={product.artists[0].name} artisturl={product.artists[0].external_urls.spotify} albumurl={product.album.external_urls.spotify}/>
        );
    
    return (
        <div>
            <Login 
            url={"https://accounts.spotify.com/authorize?client_id=" + clientID + "&response_type=token&scope=playlist-modify-private&redirect_uri=http:%2F%2Flocalhost:3000%2F"}/>
            {/* <h1 className="h1">The Playlist</h1><br/>
            <table className="tbl">
                <thead className="tbhead">
                    <tr>
                        <td className="numberhead">#</td>
                        <td>TITLE</td>
                        <td></td>
                        <td>ALBUM</td>
                    </tr>
                </thead>
                <tbody>{playlist}</tbody>
            </table> */}
        </div>
        
    );
}

export default Home;


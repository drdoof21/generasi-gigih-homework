// import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../../dummytracks';
import Song from '../../components/song/song';
import '../../App.css';
import Login from '../../components/login/login';
import Searchbar from '../../components/search-bar/searchbar';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Home = () => {
    const clientID = process.env.REACT_APP_SPOTIFY_KEY;
    let numb = 0;
    const [token, setToken] = useState('');
    const [search, setSearch] = useState('');
    const [result, setResult] = useState([]);

    const getAccess = () => {
        const params = window.location.hash.substring(1);
        const accs = new URLSearchParams(params).get("access_token");
        return accs;
    };

    useEffect(() => {
        const access_token = getAccess();
        setToken(access_token);
    },[]);

    const getText = e => {
        e.preventDefault();
        axios
        .get(`https://api.spotify.com/v1/search?access_token=${token}&q=${search}&type=track`)
        .then(response => {
            setResult(response.data.tracks.items);
        })
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    
    return (
        <div>
            {token === null
                ? <Login 
                  url={"https://accounts.spotify.com/authorize?client_id=" + clientID + "&response_type=token&scope=playlist-modify-private&redirect_uri=http:%2F%2Flocalhost:3000%2F"}/>
                : (<> 
                <Searchbar handleSearch={handleSearch} getText={getText}/>
                {result
                 .map(product => (
                     <Song key={product.id} url={product.album.images[0].url} album={product.album.name}
                     track={product.name} artistName={product.artists[0].name}
                     artisturl={product.artists[0].external_urls.spotify} 
                     albumurl={product.album.external_urls.spotify}
                     />
                 ))
                }
                </>)
                }
            
        </div>
        
    );
}

export default Home;


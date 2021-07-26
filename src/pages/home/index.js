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
    const [uri, setUri] = useState([]);

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

    const handleSelect = (songUri) => {
        if(uri.includes(songUri)){
            const filterred = uri.filter(item => item !== songUri);
            setUri(filterred);

        }else {
            setUri([...uri, songUri]);
        }
    }
    
    return (
        <div>
            {token === null
                ? <Login 
                  url={"https://accounts.spotify.com/authorize?client_id=" + clientID + "&response_type=token&scope=playlist-modify-private&redirect_uri=http:%2F%2Flocalhost:3000%2F"}/>
                : (<> 
                <Searchbar handleSearch={handleSearch} getText={getText}/>
                <table className="tbl">
                    <thead className="tbhead">
                        <tr>
                            <td className="numberhead">#</td>
                            <td>TITLE</td>
                            <td></td>
                            <td>ALBUM</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {result
                            .map(product => (
                                <Song key={product.id} number={numb+=1} url={product.album.images[0].url} album={product.album.name}
                                track={product.name} artistName={product.artists[0].name}
                                artisturl={product.artists[0].external_urls.spotify} 
                                albumurl={product.album.external_urls.spotify}
                                handleSelect={() => handleSelect(product.uri)}
                                isSelected={uri.includes(product.uri)}
                                />
                            ))
                        }
                    </tbody>
                </table>
                </>)
                }
            
        </div>
        
    );
}

export default Home;


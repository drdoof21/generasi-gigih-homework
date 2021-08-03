// import 'bootstrap/dist/css/bootstrap.min.css';
// import data from '../../dummytracks';
import Song from '../../components/song/song';
import '../../App.css';
import Login from '../../components/login/login';
import Searchbar from '../../components/search-bar/searchbar';
import Navbar from '../../components/navbar/navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {set_token} from '../../redux/tokenSetter';


const Home = () => {
    const clientID = process.env.REACT_APP_SPOTIFY_KEY;
    let numb = 0;
    // const [token, setToken] = useState('');
    const [search, setSearch] = useState('');
    const [result, setResult] = useState([]);
    const [uri, setUri] = useState([]);
    const [id, setId] = useState('');
    const [playlist,setPlaylist] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const token = useSelector(state => state.privacy.token);
    const dispatch = useDispatch();

    dispatch(set_token());

    useEffect(() => {
        if(token) {
            axios
            .get(`https://api.spotify.com/v1/me`,{
            headers: {
                Authorization: "Bearer " + token,
            }
            })
            .then((response) => {
            setId(response.data.id)
            })
            .catch((error) =>
            console.log(error))
        }
    },[token])

    useEffect(()=>{
        if(token) {
            axios
            .get(`https://api.spotify.com/v1/me/playlists`, {
                headers: {
                    Authorization: "Bearer " + token,
                }
            })
            .then((response) => {
                setPlaylist(response.data.items)
            })
            .catch( (error) =>
                console.log(error)
            )
        }
    },[token])

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

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    async function createPlaylist  () {
        if(token) {
            try{
                const responseCreatePlaylist = await axios
                .post(`https://api.spotify.com/v1/users/${id}/playlists`, 
                {
                    name: title,
                    public: false,
                    collaborative: false,
                    description: description,
                },
                {
                    headers: {
                        Authorization : "Bearer " + token,
                    },
                }
                
                )
                const playlistId = responseCreatePlaylist.data.id;
                axios
                .post(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
                {
                    uris: uri
                },
                {
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "application/json"
                    }
                }
                )
            }
            catch(error){
                console.log("aduh ", error)
            }
            finally{
                console.log("hHORE");
            }
            
        }
        
    }

    const madePlaylist = 
    playlist
        .map(play => {
            return(<a key={play.id} href={play.external_urls.spotify}>{play.name}</a>)
        })

    return (
        <div className="index">
            <Navbar createPlaylist={createPlaylist} listofPlaylist={madePlaylist} handleTitle={handleTitle} 
            handleDescription={handleDescription}/>
            <div className="content">
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
        </div>
        
    );
}

export default Home;


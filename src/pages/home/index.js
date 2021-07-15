import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../../datadummy';
import SongCard from '../../components/song/song';
const Home = () => {
    return (
        <div>
            <h1 className="h1">Create Playlist</h1>
            <SongCard url={data.album.images[1].url} album={data.album.name} track={data.name} artistName={data.artists[0].name} />
        </div>
        
    );
}

export default Home;


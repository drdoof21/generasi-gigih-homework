import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../../dummytracks';
import Song from '../../components/song/song';
import '../../App.css';
const Home = () => {
    const rows = [];
    let numb = 0;
    data.forEach((product) => {
        numb += 1;
        rows.push(
            <Song key={product.id} number={numb} url={product.album.images[0].url} album={product.album.name} track={product.name}
             artistName={product.artists[0].name} artisturl={product.artists[0].external_urls.spotify} albumurl={product.album.external_urls.spotify}/>
        );
    });
    
    return (
        <div>
            <h1 className="h1">The Playlist</h1><br/>
            <table className="tbl">
                <thead className="tbhead">
                    <tr>
                        <td className="numberhead">#</td>
                        <td>TITLE</td>
                        <td></td>
                        <td>ALBUM</td>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
        
    );
}

export default Home;


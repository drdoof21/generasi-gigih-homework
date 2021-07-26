import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';

const Song = ({number,url,album,track,artistName, artisturl, albumurl, handleSelect, isSelected}) => {
        return(
            <tr>
                <td className="numbers">{number}</td>
                <td><img src={url} alt={album} className="cardimg" /></td>
                <td><h6 className="h6track">{track}</h6>
                <a className="labelartist" href={artisturl}>{artistName}</a>
                </td>
                <td><a className="labelalbum" href={albumurl}>{album}</a></td>
                <td><button className="selectBtn" onClick={handleSelect}>{isSelected ? "Deselect" : "Select"}</button></td>
            </tr>
        );
        
}

export default Song;
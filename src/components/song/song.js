import '../../App.css';

const Song = ({number,url,album,track,artistName}) => {
        return(
            <tr>
                <td>{number}</td>
                <td><img src={url} alt={album} className="cardimg" />
                </td>
                <td><h6 className="h6track">{track}</h6>
                    <label className="labelartist">{artistName}</label>
                </td>
                <td><label >{album}</label></td>
            </tr>
        );
        
}

export default Song;
import '../../App.css';

const Song = ({number,url,album,track,artistName, artisturl, albumurl}) => {
        return(
            <tr>
                <td className="numbers">{number}</td>
                <td><img src={url} alt={album} className="cardimg" />
                </td>
                <td><h6 className="h6track">{track}</h6>
                    <a className="labelartist" href={artisturl}>{artistName}</a>
                </td>
                <td><a className="labelalbum" href={albumurl}>{album}</a></td>
            </tr>
        );
        
}

export default Song;
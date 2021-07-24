import '../../App.css';

const Song = ({url,album,track,artistName, artisturl, albumurl}) => {
        return(
            <div>
                <img src={url} alt={album} className="cardimg" />
                <h6>{track}</h6>
                <a  href={artisturl}>{artistName}</a><br/>
                <a  href={albumurl}>{album}</a><br/>
                <button>pilih</button>
            </div>
        );
        
}

export default Song;
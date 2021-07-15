import Card from 'react-bootstrap/Card';
import react from 'react';

const SongCard = ({url,album,track,artistName}) => {
        return(
            <div>
                <Card className="kard bg-dark text-white mx-auto">
                    <Card.Img variant="top" src={url} alt={album} className="cardimg"></Card.Img>
                    <Card.Body>
                        <Card.Title>{track}</Card.Title>
                        <Card.Subtitle>{artistName}</Card.Subtitle>
                        <Card.Text>{album}</Card.Text>
                    </Card.Body>
                </Card>
                
            </div>
        );
    // }
        
}

export default SongCard;
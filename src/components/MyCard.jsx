import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const MyCard = ({image, nombre, descripcion, texto, colorBadge}) => {
return (
    <div>
        <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image}/>
        <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <p>{descripcion}</p>
        <Tags texto={texto} colorBadge={colorBadge}/>
        </Card.Body>
        </Card>
    </div>
       );
 };  

export default MyCard; 
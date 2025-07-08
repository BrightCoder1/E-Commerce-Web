import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComp() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" className='crd' src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Card.Body>
                <Card.Title>Iteam Name</Card.Title>
                <Card.Text>
                    Price: <b>$20</b>
                </Card.Text>
                <Card.Text>
                    Available: <b>100 Products</b>
                </Card.Text>
                <Button variant="primary">Add To Card</Button>
            </Card.Body>
        </Card>
    );
}

export default CardComp;
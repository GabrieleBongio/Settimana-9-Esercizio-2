import { Button, Card, Col } from "react-bootstrap";
import books from "../data/scifi.json";

const AllTheBooks = () =>
  books.map((book) => {
    return (
      <Col key={book.asin} xs={6} md={3} xl={2}>
        <Card>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Button variant="outline-success" className="w-100">
              Scopri di più
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  });

export default AllTheBooks;

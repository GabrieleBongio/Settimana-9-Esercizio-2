import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import { Container, Row } from "react-bootstrap";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <>
      <MyNav></MyNav>
      <Container className="my-5">
        <Welcome></Welcome>
        <Row className="g-1">
          <AllTheBooks></AllTheBooks>
        </Row>
      </Container>
      <MyFooter></MyFooter>
    </>
  );
}

export default App;

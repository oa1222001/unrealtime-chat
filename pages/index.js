import classes from "../styles/home.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Link from "next/Link";
export default function Home() {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} lg={4} className="mb-4 mb-lg-0 text-center">
          <h1 className={`${classes.header1} mt-5`}>Have your best chat</h1>
          <p className={`lead`}>Fast, easy &amp; unlimited team chat.</p>
          <Link href="/signup">
            <Button variant="primary" className="me-2" size="lg">
              Sign up
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="outline-primary" size="lg">
              Login
            </Button>
          </Link>
        </Col>
        <Col xs={12} lg={8} className="text-center mt-4 mt-lg-0">
          <Image
            src="https://uploads-ssl.webflow.com/5e9cdc9e9aae7e09dbbc7b72/5e9e131121922fa4f55de3ef_hero-min.png"
            fluid
            style={{ maxHeight: "520px" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

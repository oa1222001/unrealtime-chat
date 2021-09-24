import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { Fragment } from "react";

const about = () => {
  return (
    <Fragment>
      <Container className="text-center mt-4 ">
        <Row className="align-items-center">
          <Col xs={12} lg={6} className="mb-4 mb-lg-0 ">
            <p className="lead display-3">
              We strive to make customer interaction crispy.
            </p>
          </Col>
          <Col xs={12} lg={6} className="mt-4 mt-lg-0">
            <Image
              src="https://crisp.chat/static/images/about/main/illustration.png?d533ffe"
              alt="man stand on a wall"
              fluid
            />
          </Col>
        </Row>
      </Container>
      <Container className="text-center">
        <hr />
        <h1 className="display-4 mt-1">Want to join our team?</h1>
        <p className="lead text-muted">
          We are looking for passionate perfectionists.
        </p>
        <Button variant="primary" size="lg" className="mb-5">
          Join us
        </Button>
      </Container>
    </Fragment>
  );
};
export default about;

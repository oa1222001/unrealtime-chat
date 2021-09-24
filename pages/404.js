import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import image from "../public/err.png";
import { Fragment } from "react";

const err = () => {
  return (
    <Fragment>
      <Container className="text-center mt-4 ">
        <Row className="align-items-center">
          <Col xs={12} lg={6} className="mb-4 mb-lg-0 ">
            <p className="lead display-3">Wrong Page</p>
          </Col>
          <Col xs={12} lg={6} className="mt-4 mt-lg-0">
            <Image
              src="https://image.freepik.com/free-vector/error-404-concept-landing-page_52683-18367.jpg"
              alt="man stand on a wall"
              rounded
              fluid
            />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default err;

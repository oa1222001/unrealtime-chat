import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { Fragment } from "react";
const NavbarComp = (props) => {
  return (
    <Fragment>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NiIgaGVpZ2h0PSIyNCI+PGcgZmlsbD0iIzE5NzJmNSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNDQuNzMgMTcuNzFhNS4xIDUuMSAwIDAwNC4zMy0yLjAxbC0xLjYyLTEuNTJhMy4wNCAzLjA0IDAgMDEtMi42IDEuMzVjLTIuMDMgMC0zLjQxLTEuNTYtMy40MS0zLjc3IDAtMi4yIDEuMzgtMy43NCAzLjQxLTMuNzRhMyAzIDAgMDEyLjYgMS4zbDEuNjItMS40N2E1LjA0IDUuMDQgMCAwMC00LjMzLTJjLTMuNDIgMC01LjgzIDIuNS01LjgzIDUuOTEgMCAzLjQyIDIuNCA1Ljk1IDUuODMgNS45NXptOC42NC0uMjh2LTcuN2MuNS0uODIgMS44Ny0xLjUyIDIuOTMtMS41Mi4zIDAgLjU0LjAyLjc1LjA3VjUuODRhNC45IDQuOSAwIDAwLTMuNjggMS45MlY2LjEyaC0yLjQ2djExLjMxem02LjU4LTEyLjY5YTEuNTIgMS41MiAwIDEwMC0zLjA0IDEuNTIgMS41MiAwIDEwMCAzLjA0em0xLjIyIDEyLjdWNi4xMUg1OC43djExLjMxem02Ljc1LjI3YzMuMDQgMCA0LjctMS41MiA0LjctMy41MyAwLTQuNS02Ljg0LTMtNi44NC01IDAtLjc5LjgtMS40IDIuMDktMS40IDEuNDMgMCAyLjY3LjYxIDMuMzUgMS4zNmwxLjAzLTEuNzNhNi40NiA2LjQ2IDAgMDAtNC4zOC0xLjU3Yy0yLjg2IDAtNC40NSAxLjU3LTQuNDUgMy40MiAwIDQuMzUgNi44NCAyLjc2IDYuODQgNC45OSAwIC44OS0uNzggMS41LTIuMjUgMS41YTUuOCA1LjggMCAwMS0zLjgyLTEuNTdsLTEuMTIgMS43NWE2Ljg1IDYuODUgMCAwMDQuODUgMS43OHptMTIuOTIgMGMtMS40MyAwLTIuNjktLjY1LTMuNjMtMS44NXY1Ljg4aC0yLjQ1VjYuMTJoMi40NXYxLjU1YTQuNTEgNC41MSAwIDAxMy42My0xLjgzYzIuOTMgMCA1LjAxIDIuMiA1LjAxIDUuOTIgMCAzLjczLTIuMDggNS45NS01IDUuOTV6bS0uNzItMi4xOGMxLjk0IDAgMy4yLTEuNTYgMy4yLTMuNzcgMC0yLjItMS4yNi0zLjc0LTMuMi0zLjc0LTEuMTUgMC0yLjM0LjY1LTIuOSAxLjV2NC40N2EzLjY5IDMuNjkgMCAwMDIuOSAxLjU0eiIvPjxwYXRoIGQ9Ik0xMS41NyAxOC45OWw0LjYzIDQuOTIgMy42Mi01Ljg0IDkuNi0xLjA1TDI3Ljg3LjE2LjE0IDMuMjIgMS43IDIwLjA4eiIvPjwvZz48L3N2Zz4="
                className="d-inline-block img-fluid"
                alt="Crisp Chat"
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="myNav" />
          <Navbar.Collapse id="myNav">
            <Nav className="mx-auto">
              <Link href="/" passHref>
                <Nav.Link>Home</Nav.Link>
              </Link>

              <Link href="/about" passHref>
                <Nav.Link className="ms-3">About</Nav.Link>
              </Link>
            </Nav>
            <Link href="/signup">
              <Button variant="primary">Sign Up</Button>
            </Link>
            <Link href="/login">
              <Button className="ms-2" variant="outline-primary">
                Login
              </Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {props.children}
    </Fragment>
  );
};
export default NavbarComp;

import { Navbar, Container, Nav } from "react-bootstrap";

const Template = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="sm">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="/mercedes.png"
                        width="50"
                        className="d-inline-block align-center"
                        alt="mercedes-logo"
                    />{" "}
                    Mercedes-benz
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Template;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';


function NavbarComponent() {
    return (
        <Navbar expand="lg" className="bg-blue">
            <Container>
                <Navbar.Brand href="/">E-commerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto mx-5">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/shop">Shop</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <Nav.Link href="/products">Products</Nav.Link>
                        <NavDropdown title="Other" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/order">Order</NavDropdown.Item>
                            <NavDropdown.Item href="/contact">
                                Contact
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/register">
                                Register
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <div className="flex">
                    <input type="text" placeholder='Search ...' className='search' />
                    <Button variant="secondary">Secondary</Button>
                </div>

            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
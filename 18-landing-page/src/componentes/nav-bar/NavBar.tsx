import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import './NavBar.scss'

export const NavBar = () => {
    return <>
        <Navbar bg="" expand="lg" id="nav-bar">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home">
                            <i className="bi bi-apple"></i>
                        </Nav.Link>
                        <Nav.Link href="/">Tienda</Nav.Link>
                        <Nav.Link href="https://www.apple.com/mx/mac/">Mac</Nav.Link>
                        <Nav.Link href="https://www.apple.com/mx/ipad/">iPad</Nav.Link>
                        <Nav.Link href="https://www.apple.com/mx/iphone/">iPhone</Nav.Link>
                        <Nav.Link href="https://www.apple.com/mx/watch/">Watch</Nav.Link>
                        <Nav.Link href="https://www.apple.com/mx/airpods/">Airpods</Nav.Link>
                        <Nav.Link href="https://www.apple.com/mx/tv-home/">TV y Casa</Nav.Link>
                        <Nav.Link href="https://www.apple.com/mx/services/">Sólo Apple</Nav.Link>
                        <Nav.Link href="https://www.apple.com/mx/shop/accessories/all">Accesorios</Nav.Link>
                        <Nav.Link href="https://support.apple.com/es-mx">Soporte</Nav.Link>
                        <Nav.Link href="#">
                            <i className="bi bi-search"></i>
                        </Nav.Link>
                        <Nav.Link href="#link">
                            <i className="bi bi-bag"></i>
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}
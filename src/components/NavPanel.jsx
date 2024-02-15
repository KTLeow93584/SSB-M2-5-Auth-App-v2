import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { AuthGetUser } from '../AuthContext.jsx';

export default function Home() {
    const user = AuthGetUser().user;
    const isLoggedIn = user !== null && user !== undefined;

    return (
        <Navbar expand="lg" style={{ backgroundColor: "#a7a7a7" }}>
            <Container>
                <Navbar.Brand href="/">Designed with React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        {isLoggedIn ? <Nav.Link href="/dashboard">Dashboard</Nav.Link> : null}
                        {isLoggedIn ? <Nav.Link href="/profile">Profile</Nav.Link> : null}
                        {isLoggedIn ? null : <Nav.Link href="/login">Login</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
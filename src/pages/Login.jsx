import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthGetUser, AuthUpdateUser } from '../AuthContext.jsx';
import NavPanel from '../components/NavPanel.jsx';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Login() {
    const user = AuthGetUser().user;
    const authenticateUser = AuthUpdateUser();
    const isLoggedIn = (user !== null && user !== undefined);

    return (
        <>
            <NavPanel />
            <Container fluid className="d-flex align-items-center justify-content-center bg-dark" style={{ width: "100%", height: "100vh" }}>
                <Row className="rounded">
                    {RenderHeader(isLoggedIn, user)}
                    {isLoggedIn ? null : RenderLoginForm(user, authenticateUser)}
                </Row>
            </Container>
        </>
    );
}

function RenderHeader(isLoggedIn, user) {
    return (
        <Row>
            <Col className="col-12 d-flex justify-content-center mb-2">
                <h1 className="text-white my-0">
                    {`${isLoggedIn ? ("Welcome," + user.lastName + " " + user.firstName) : "Login Page"}`}
                </h1>
            </Col>
        </Row>
    );
}

function RenderLoginForm(user, authenticateUser) {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    return (
        <Row>
            <Col className="col-12">
                <Form className="mb-2" onSubmit={(event) => {
                    event.preventDefault();
                    const result = authenticateUser(username, password);

                    if (result)
                        navigate("/dashboard");
                }}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="email" className="me-2 text-white">Email: </Form.Label>
                        <Form.Control required id="email" value={username}
                            className="me-2" type="email" placeholder="Enter email here"
                            onChange={(event) => setUserName(event.target.value)} />
                        <Form.Text className="text-muted">
                            We&apos;ll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="password" className="me-2 text-white">Password: </Form.Label>
                        <Form.Control required id="password" value={password}
                            className="me-2" type="password" placeholder="Enter password here"
                            onChange={(event) => setPassword(event.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mb-1">Log In</Button>
                </Form>
                {user === undefined ? RenderErrorSection() : ""}
            </Col>
        </Row>
    );
}

function RenderErrorSection() {
    return (
        <Form.Label className="fs-6 text-danger mb-3">Invalid Email/Password Combination</Form.Label>
    );
}
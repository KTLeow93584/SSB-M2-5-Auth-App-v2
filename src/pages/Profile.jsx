import { AuthGetUser, AuthUpdateUser } from '../AuthContext.jsx';
import NavPanel from '../components/NavPanel.jsx';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Profile() {
    const user = AuthGetUser().user;
    const authenticateUser = AuthUpdateUser();

    return (
        <>
            <NavPanel />
            <Container fluid className="d-flex bg-dark align-items-start justify-content-center" style={{ width: "100%", height: "100vh" }}>
                <Row className="d-flex flex-column align-items-center mt-3 rounded"
                    style={{ width: "100%", backgroundColor: "beige" }}>
                    <h1 className="mt-2">Profile</h1>
                    <Row style={{ width: "fit-content" }}>
                        <Col className="col-12 ms-1 mt-1 me-5 mb-3">
                            <Card className="my-3">
                                <Card.Body>

                                    <Card.Title>
                                        Welcome, {user.lastName + " " + user.firstName}
                                    </Card.Title>

                                    <Card.Text className="mb-0">
                                        First Name: {user.firstName}
                                    </Card.Text>
                                    <Card.Text className="mb-0">
                                        Last Name:&nbsp;
                                        {(user.lastName !== null && user.lastName !== undefined && user.lastName.trim().length > 0) ? user.lastName : "N/A"}
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </>
    );
}
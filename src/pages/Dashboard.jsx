import { AuthUpdateUser } from '../AuthContext.jsx';
import NavPanel from '../components/NavPanel.jsx';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Dashboard() {
    const authenticateUser = AuthUpdateUser();

    return (
        <>
            <NavPanel />
            <Container fluid className="d-flex bg-dark align-items-start justify-content-center" style={{ width: "100%", height: "100vh" }}>
                <Row className="d-flex flex-column justify-content-center mt-3 rounded"
                    style={{ width: "fit-content", backgroundColor: "beige" }}>
                    <h1 className="mt-2">Dashboard</h1>
                    <Row style={{ width: "fit-content" }}>
                        <Col className="col-12 ms-1 mt-1 me-5 mb-3">
                            <Card className="my-3">
                                <Card.Body>
                                    <Card.Title>
                                        Sigma School Analytics
                                    </Card.Title>
                                    <Card.Text>
                                        People who graduate who get jobs: 80%.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-12 d-flex flex-column text-white align-items-center mb-2">
                            <Button variant="primary" onClick={() => authenticateUser(null, null)} className="mb-2">Log Out</Button>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </>
    );
}
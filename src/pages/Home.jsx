import NavPanel from '../components/NavPanel.jsx';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

export default function Home() {
    return (
        <>
            <NavPanel />
            <Container fluid className="d-flex align-items-center justify-content-center bg-dark" style={{ width: "100%", height: "100vh" }}>
                <Image src={new URL('../assets/react-logo.gif', import.meta.url)} width="50%" height="auto" />
            </Container>
        </>
    );
}
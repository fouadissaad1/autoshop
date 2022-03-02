import Footer from "../Footer";
import Header from "../Header";
import {Container, Row, Col} from 'react-bootstrap';
import '../css/About.css';

export function About() {
    return (
        <>
            <Header/>
            <br/>
            <Container>
                <Row>
                    <Col md={3}></Col>
                    <Col>
                        <h1>We're the Belgium leading used car supermarket!</h1>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <p>We could tell you all about how, as an award-winning retailer, we are the leading car
                        supermarket in the Belguim, that we have thousands of cars in stock, or even how we make
                        sure our cars are the most competitively-priced in the country with our Price Match
                        Promise.</p>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col/>
                    <Col>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/autoshop-b6af9.appspot.com/o/AboutPage%2FAuto%20reparatie%20Eindhoven.jfif?alt=media&token=fbe7c678-380b-4a5e-8e0e-85004dbe933c"
                            className="img-fluid"/>
                    </Col>
                    <Col>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/autoshop-b6af9.appspot.com/o/AboutPage%2Fimages.jfif?alt=media&token=4dd10423-9e5d-40a0-86eb-4f04854f7399"
                            className="img-fluid"/>
                    </Col>
                    <Col/>
                </Row>

            </Container>
            <Footer/>
        </>


    )
}

export default About;
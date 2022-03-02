import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import Footer from "../Footer";

export function Home() {
    return (
        <>
            <div className={"Row1"}>
                <div className={"bottom-left"}>
                    <h3>Welcome to Autoshop</h3>
                    <p>Order your car</p>
                </div>
                <img
                    src={"https://firebasestorage.googleapis.com/v0/b/autoshop-b6af9.appspot.com/o/HomePage%2Fgeneve.jpg?alt=media&token=3270e718-0947-437e-b8fb-ef755b5e89f2"}
                    alt="auto Terre" height="888" width="1853"/>
            </div>
            <Container>
                <Row>
                    <Col md={3}></Col>
                    <Col md={2}></Col>
                    <Col md={4}><h3>WAAROM VOOR ONS KIEZEN </h3></Col>
                    <Col md={3}></Col>
                </Row>
            </Container>
            <br/>
            <Container>
                <Row>
                    <Col>
                        <h4>EENVOUDIGE FINANCIERING</h4>
                        <p>We financieren ook uw auto</p>
                    </Col>
                    <Col>
                        <h4>RUIM AANBOD</h4>
                        <p>Nieuwe en tweedehands auto's.</p>
                    </Col>
                    <Col>
                        <h4>VERTROUWD DOOR VELE</h4>
                        <p>familiebedrijf sinds 2020</p>
                    </Col>
                    <Col>
                        <h4>ONDERHOUD EN AUTOPAS INBEGREPEN</h4>
                        <p>Al onze wagens worden bij u afgeleverd met car-pass en onderhoud.</p>
                    </Col>
                </Row>
            </Container>
            <div className={"Row1"}>
                <img
                    src={"https://firebasestorage.googleapis.com/v0/b/autoshop-b6af9.appspot.com/o/HomePage%2Fauto.jpg?alt=media&token=ed2fd804-ee60-40dd-86a8-a35708b614c6"}
                    alt="auto Terre" height="888" width="1853"/>
            </div>
            <Footer/>
        </>
    )
}

export default Home;
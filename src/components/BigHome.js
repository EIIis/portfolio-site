import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function BigHome(props){
    return(
        <Jumbotron>
            <Container fluid = {true}>
                <Row className = "justify-content-center">
                    <Col md={8} sm = {12}>
                    {props.title && <h1 className = "display-1 font-weight-bolder">{props.title}</h1>}
                    {props.subtitle && <h3 className = "display-4 font-weight-light">{props.subtitle}</h3>}
                    {props.text && <h3 className = "lead font-weight-light">{props.text}</h3>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default BigHome
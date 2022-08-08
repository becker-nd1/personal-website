import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";

function MyGrid() {
  return (
    <Container fluid="lg">
      <Row>
        <Col>My Intro</Col>
        <Col>My Graphic</Col>
      </Row>
    </Container>
  );
}

export default MyGrid;

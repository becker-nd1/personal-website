import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function MyCard({ header, image, title, text }) {
  return (
    <Card bg="light" key="Light" text="primary" style={{ width: "18rem" }}>
      <Card.Header>{header}</Card.Header>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title> {title} </Card.Title>
        <Card.Text> {text} </Card.Text>
        <Button variant="primary"> Fun with React! </Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;

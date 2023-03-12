import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Panel(props) {
  return (
    <Card style={{ minHeight: "558px"}} className="panel">
      <Card.Img variant="top" src={props.img} style={{padding: '5px', backgroundColor: '#00425a'}}/>
      <Card.Body className="card-body">
        <p className="title">{props.name}</p>
        <div className="W-100">
        <Link to={`/game/${props.gameId}`}>
          <Button className="steam-btn w-100" variant="dark" size="lg">
            VIEW GAME
          </Button>
        </Link>
        </div>
      </Card.Body>
    </Card>
  );
}
export default Panel;
// width: "18rem"
import React, { useState } from "react";
import Icon from "./components/icon";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "bootstrap/dist/css/bootstrap.css";
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "./App.css";

const itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMsg, setWinMsg] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMsg("");
    itemArray.fill("empty", 0, 9);
  };

  const chkIsWinner = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMsg(`${itemArray[0]} wins`);
    } else if (
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5] &&
      itemArray[3] !== "empty"
    ) {
      setWinMsg(`${itemArray[3]} wins`);
    } else if (
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8] &&
      itemArray[6] !== "empty"
    ) {
      setWinMsg(`${itemArray[6]} wins`);
    } else if (
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6] &&
      itemArray[0] !== "empty"
    ) {
      setWinMsg(`${itemArray[0]} wins`);
    } else if (
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7] &&
      itemArray[1] !== "empty"
    ) {
      setWinMsg(`${itemArray[1]} wins`);
    } else if (
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8] &&
      itemArray[2] !== "empty"
    ) {
      setWinMsg(`${itemArray[2]} wins`);
    } else if (
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8] &&
      itemArray[0] !== "empty"
    ) {
      setWinMsg(`${itemArray[0]} wins`);
    } else if (
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6] &&
      itemArray[2] !== "empty"
    ) {
      setWinMsg(`${itemArray[2]} wins`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[1] !== "empty" &&
      itemArray[2] !== "empty" &&
      itemArray[3] !== "empty" &&
      itemArray[4] !== "empty" &&
      itemArray[5] !== "empty" &&
      itemArray[6] !== "empty" &&
      itemArray[7] !== "empty" &&
      itemArray[8] !== "empty"
    ) {
      setWinMsg(`Match Draw`);
    }
  };

  const changeItem = (itemNumber) => {
    if (winMsg) {
      return toast(winMsg, { type: "success" });
    }
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("Already filled", { type: "info" });
    }
    chkIsWinner();
  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMsg ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {winMsg}
              </h1>
              <Button color="success" block onClick={reloadGame}>
                Reload the game
              </Button>
            </div>
          ) : (
            <h1 className="text-center text-danger">
              {isCross ? "Cross" : "Circle"}'s turn
            </h1>
          )}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card onClick={() => changeItem(index)}>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;

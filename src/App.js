import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Header from "./header/header.js";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Header />
        </Container>
      </div>
    );
  }
}

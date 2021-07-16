import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Button color="primary">Shop</Button>
        <Button color="primary">About us</Button>
        <Button color="primary">Sustainability</Button>
        <Button variant="contained" color="primary">
          Disable elevation
        </Button>
        <Button variant="outlined" color="primary">
          shop now
        </Button>
        <Button variant="outlined" color="primary">
          Get started
        </Button>
      </div>
    );
  }
}

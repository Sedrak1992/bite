import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Header from "./header/header.js";
import "./App.css";
import Arr from "./header/arr.js"
import axios from "axios";

export default class App extends Component {
  state = {
    product: [],
  };



  componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      const item = response.data;
      const newItem = item.splice(0, 4);
      console.log(item, "componentDidMount");
      this.setState({
        product: newItem,
      });
    });
  }

  render() {
    return (
      <div>
        <Container>
          <Header/>
          <Arr arr={this.state.product}/>
        </Container>
      </div>
    );
  }
}

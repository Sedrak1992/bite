import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Header from "./header/header.js";
import "./App.css";
import axios from "axios";

export default class App extends Component {
  state = {
    list: [],
  };

  componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      this.setState({
        list: response.data,
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.list.map((item) => (
          <div>
            {item.id}
            <img src={item.image} width="100px" />
            {item.title}
          </div>
        ))}
        <Container>
          <Header />
        </Container>
      </div>
    );
  }
}

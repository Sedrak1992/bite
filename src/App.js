import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";

import Header from "./header/header.js";
import Box from "./header/box.js";
import Rectangie from "./Rectangie/rectangie.js";
import Appp from "./Appp";
import "./App.css";
import Arr from "./header/arr.js";
import axios from "axios";

export default class App extends Component {
  state = {
    isOpen: false,
    slider: [],
    products: [],
    cart: [],
  };

  componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      this.setState({
        slider: response.data.splice(0, 4),
        products: response.data.splice(0, 9),
      });
    });
  }

  toggleDrawer = () => {
    // this.setState({ isOpen: !this.state.isOpen });
    this.setState((prev) => ({ isOpen: !prev.isOpen }));
  };

  handleAdd = (item) => {
    this.setState({ cart: [item, ...this.state.cart] });
  };

  handleRemove = (id) => {
    this.setState({ cart: this.state.cart.filter((v) => v.id !== id) });
  };

  render() {
    return (
      <div>
        <Button onClick={this.toggleDrawer}>modal</Button>
        <Drawer
          anchor="left"
          open={this.state.isOpen}
          onClose={this.toggleDrawer}
        >
          <div onClick={this.toggleDrawer}>X</div>
          {this.state.cart.map((v) => (
            <div>
              {v.title}
              <button onClick={() => this.handleRemove(v.id)}>x</button>
            </div>
          ))}
        </Drawer>
        <Container><Header />

          <Rectangie />
          <Box />
          <Appp products={this.state.products} onAdd={this.handleAdd} />
          <Arr arr={this.state.slider} onAdd={this.handleAdd} />
        </Container>
      </div>
    );
  }
}

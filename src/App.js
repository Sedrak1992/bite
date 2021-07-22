import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Header from "./header/header.js";
import Box from "./header/box.js";
import Rectangie from "./Rectangie/rectangie.js";
import Drawer from "@material-ui/core/Drawer";
import Appp from "./Appp";
import "./App.css";
import Arr from "./header/arr.js";
import axios from "axios";
import YourWallet from "./member1/Componet/Section1/yourWallet";
import Section_2 from "./member1/Componet/Section2/section2";
import RadioSEction from "./member1/Componet/Section3/radioSection";

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
        <Drawer
          anchor="left"
          open={this.state.isOpen}
          onClose={this.toggleDrawer}
        >
          {this.state.cart.map((v) => (
            <div className="imgs1">
              <div>{v.price}</div>
              <div>{v.title}</div>
              <div>{v.id}</div>
              <div>
                <img src={v.image} />
              </div>
              <div>
                <button
                  className="buttonW"
                  onClick={() => this.handleRemove(v.id)}
                >
                  xxx
                </button>
              </div>
            </div>
          ))}
        </Drawer>
        <Header molel={this.toggleDrawer} />
        <Rectangie />
        <h1>sdfghgfds</h1>
        <Container>
          <Appp products={this.state.products} onAdd={this.handleAdd} />
          <Arr arr={this.state.slider} onAdd={this.handleAdd} />
        </Container>
        <Box mt={2} />
        <YourWallet />
        <Section_2 />
        <RadioSEction />
      </div>
    );
  }
}

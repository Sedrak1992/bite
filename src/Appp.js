import axios from "axios";
import React from "react";
import "./App.css";
import ProductTable from "./ProductSection/productTable.js";

class Appp extends React.Component {
  render() {
    return (
      <div>
        <div className="productTable">
          {this.props.products.map((productinfo) => (
            <ProductTable product={productinfo} onAdd={this.props.onAdd} />
          ))}
        </div>
      </div>
    );
  }
}

export default Appp;

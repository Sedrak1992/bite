import React from "react";
import "./App.css";
import ProductTable from "./ProductSection/productTable.js";
import Box from "@material-ui/core/Box";

class Appp extends React.Component {
  render() {
    return (
      <Box mt={3}>
        <div className="productTable">
          {this.props.products.map((productinfo) => (
            <ProductTable product={productinfo} onAdd={this.props.onAdd} />
          ))}
        </div>
      </Box>
    );
  }
}

export default Appp;

import axios from "axios";
import React from "react";
import YourWallet from "./Componet/Section1/yourWallet";
import "./App.css";
import ProductTable from "./Componet/ProductSection/productTable";
import Slider from "./Componet/Slider/slider";
import Section_2 from "./Componet/Section2/section2";
import RadioSEction from "./Componet/Section3/radioSection";

class App extends React.Component {
  state = {
    product: [
      {
        prodInfo: [
          {
            newprice: 30,
            reted: 4.9,
            reviews: 10400,
          },
          {
            newprice: 30,
            reted: 4.9,
            reviews: 10400,
          },
          {
            newprice: 30,
            reted: 4.9,
            reviews: 10400,
          },
          {
            newprice: 30,
            reted: 4.9,
            reviews: 10400,
          },
          {
            newprice: 30,
            reted: 4.9,
            reviews: 10400,
          },
          {
            newprice: 30,
            reted: 4.9,
            reviews: 10400,
          },
          {
            newprice: 30,
            reted: 4.9,
            reviews: 10400,
          },
          {
            newprice: 30,
            reted: 4.9,
            reviews: 10400,
          },
        ],
      },
    ],
    slider: [],
  };

  componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      const item = response.data;
      const newItem1 = item.splice(0, 9);
      console.log(item);
      this.setState({
        product: newItem1,
        slider: item,
      });
    });
  }
  render() {
    return (
      <div>
        <div className="productTable">
          {this.state.product.map((productinfo) => (
            <ProductTable {...productinfo} />
          ))}
        </div>
        <Slider item={this.state.slider} />
        <YourWallet />
        <Section_2 />
        <RadioSEction />
      </div>
    );
  }
}

export default App;

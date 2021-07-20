import React from "react";
import Container from "@material-ui/core/Container";
import "./yourWallet.css";
import icon1 from "../image/icon1.png";
import icon2 from "../image/icon2.png";
import icon3 from "../image/icon3.png";
import Vector from "../image/Vector.png";

class YourWallet extends React.Component {
  state = {
    list: [
      {
        title: "Choose your flavor",
        text: "Choose from Fresh Mint or Activated Charcoal with Fresh Mint.",
        img: icon1,
        ClassName: "icon1",
      },
      {
        title: "Get a refill every 4 months",
        text: "We send you fresh Bits every 4 months so you never run out of bits.",
        img: icon2,
        ClassName: "icon2",
      },
      {
        title: "Pause or cancel anytime",
        text: "Going on vacation? You can adjust, postpone, or cancel your subscription at any time, hassle-free.",
        img: icon3,
        ClassName: "icon3",
      },
    ],
  };
  render() {
    return (
      <div className="yourWalet">
        <div className="yourWaletDiv yourwalletimage">
          <Container>
            <div className="textBox">
              <h2>Better for your wallet, better for our planet</h2>
              <p className="textAboutProduct">
                Our subscription is the most eco-friendly and affordable way to
                kick the tube.
              </p>
              <button>Get started</button>
              <p className="textAboutPrice">
                Save 38% — starting from $7.50 per month
              </p>
            </div>
          </Container>
        </div>

        <div className="yourWaletDiv yourwalletimageblue"></div>
        <div className="yourWaletwhite">
          <img className="vector" src={Vector} />
          {this.state.list.map((item) => (
            <div className="productType">
              <img className={item.ClassName} src={item.img} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default YourWallet;

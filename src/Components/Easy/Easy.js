import React, { Component } from "react";
import chines from "../../images/chinesGirl.png";
import "./Easy.css";

export default class Easy extends Component {
  render() {
    return (
      <div>
        <div className="easy">
          <div>
            <div className="how">How to</div>
            <div className="textBig">
              Easy as bite <br />
              brush, smile,
              <br />
              repeat,
            </div>
            <div className="textSmall">
              Bite down on your Bit <br />
              Brush with a wet toothbrush
              <br />
              Smile and watch it foam up like
              <br /> magic
              <br />
              Repeat twice a day, every day
              <br />
              Shop now
            </div>
          </div>
          <div>
            <img className="chines" src={chines} />
          </div>
        </div>
      </div>
    );
  }
}

import React from "react";
import girl from "../../images/girl.png";
import logo from "../../images/logo.png";
import Carousel from 'react-elastic-carousel';

class Item extends React.Component {
  state = {
    items: [
      {
        main: (
          <div className="slider">
            <div>
              <img src={girl} className="girl" />
            </div>
            <div className="mainSlide">
              <img src={logo} className="logo" />
              <div>"The most creative people in buisness 2020"</div>
            </div>
          </div>
        ),
        id: 1,
      },
      {
        main: (
          <div className="slider">
            <div>
              <img src={girl} className="girl" />
            </div>
            <div className="mainSlide">
              <img src={logo} className="logo" />
              <div>"The most creative people in buisness 2020"</div>
            </div>
          </div>
        ),
        id: 2,
      },
      {
        main: (
          <div className="slider">
            <div>
              <img src={girl} className="girl" />
            </div>
            <div className="mainSlide">
              <img src={logo} className="logo" />
              <div>"The most creative people in buisness 2020"</div>
            </div>
          </div>
        ),
        id: 3,
      },
      {
        main: (
          <div className="slider">
            <div>
              <img src={girl} className="girl" />
            </div>
            <div className="mainSlide">
              <img src={logo} className="logo" />
              <div>"The most creative people in buisness 2020"</div>
            </div>
          </div>
        ),
        id: 4,
      },
      {
        main: (
          <div className="slider">
            <div>
              <img src={girl} className="girl" />
            </div>
            <div className="mainSlide">
              <img src={logo} className="logo" />
              <div>"The most creative people in buisness 2020"</div>
            </div>
          </div>
        ),
        id: 5,
      },
    ],
  };
  render() {
    const { items } = this.state;
    return (
      <Carousel>
        {items.map((item) => (
          <div key={item.id}>{item.main}</div>
        ))}
      </Carousel>
    );
  }
}

export default Item

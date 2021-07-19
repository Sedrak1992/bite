import React from "react";
import StarIcon from "@material-ui/icons/Star";
import IconButton from "@material-ui/core/IconButton";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";


function Arr(props) {
  const { arr, onAdd } = props;
  console.log(arr);
  return (
    <div className="box2">
      {arr.map((item) => (
        <div className="border">
          <div className="DivImg">
            <img src={item.image} className="imgItem" width="100%" />
          </div>
          <div className="Fresh">
            <div>Fresh Mint</div>
            <div>{item.price}</div>
          </div>
          <p>toothpaste</p>
          <div>{item.title}</div>
          {item.id}
          <div className="StarIcon">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <IconButton onClick={() => onAdd(item)}>
            <ShoppingBasketIcon />
          </IconButton>
        </div>
      ))}
    </div>
  );
}
export default Arr;

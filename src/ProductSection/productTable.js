import React from "react";
import "./productTable.css";
export default function ProductTable(props) {
  return (
    <div className="productBox">
        <img src={props.image} />
        <div className="productInfo">
          <div>
            <h2>{props.title}</h2>
            <span>{props.price} $</span>
          </div>
          <div>
            <p>{props.newprice}</p>
          </div>
        </div>
        <div className="icon">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
    </div>
  );
}

import React from "react";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import IconButton from "@material-ui/core/IconButton";
import "./productTable.css";

export default function ProductTable({product, onAdd}) {
  return (
    <div className="productBox">
      <img src={product.image} />
      <div className="productInfo">
        <div>
          <h2>{product.title}</h2>
          <span>{product.price} $</span>
        </div>
        <div>
          <p>{product.newprice}</p>
        </div>
      </div>
      <div className="icon">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <IconButton onClick={() => onAdd(product)}>
        <ShoppingBasketIcon />
      </IconButton>
    </div>
  );
}

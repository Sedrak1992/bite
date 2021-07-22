import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import StarIcon from '@material-ui/icons/Star';
import Card from "./../../../images/card.svg"

function Product(props) {
    const {products, addToCard, item} = props
    return (
        <Grid className="product" item xs={12} sm={6} md={4}>
            <button className="card" onClick={addToCard}><img src={Card} alt=""/></button>
            <img className="pr_img" src={item.image} alt=""/>
            <div className="info">
                <div className="data">
                    <h3>{item.title}</h3>
                    <span className="category">{item.category}</span>
                </div>
                <div className="price">
                    <span className="new_price">${item.price}</span>
                    <span className="old_price">${item.price}</span>
                </div>
            </div>
            <div className="rating_box">
                <span>Rated 4.9 out of 5</span>
                <span>10.368 Reviews</span>
            </div>
            <div className="colors">
                <span style={{backgroundColor: "#85CCC8"}}></span>
                <span style={{backgroundColor: "#8996B7"}}></span>
                <span style={{backgroundColor: "#FFBBB8"}}></span>
            </div>
            <div className="stars">
                <StarIcon color="#162345"/>
                <StarIcon color="#162345"/>
                <StarIcon color="#162345"/>
                <StarIcon color="#162345"/>
                <StarIcon color="#162345"/>
            </div>
        </Grid>
    )
}

export default Product;




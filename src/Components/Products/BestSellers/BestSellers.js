import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "@material-ui/core/Container";
import StarIcon from "@material-ui/icons/Star";

export default class BestSellers extends Component {
    render() {
        const bestSellers = this.props.bestSellers
        const settings = {
            autoplay: true,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            centerPadding: 30
        };
        return (
            <div id="bestSellers">
                <Container maxWidth="xl">
                    <Slider {...settings}>
                        {bestSellers.map((item, index) => {
                            return (
                                <div className="product">
                                    <img className="pr_img" src={item.image} alt=""/>
                                    <div className="info">
                                        <div className="data">
                                            <h3>{item.title}</h3>
                                            <span className="category">{item.category}</span>
                                        </div>
                                        <div className="price">
                                            <span className="old_price">${item.price}</span>
                                        </div>
                                    </div>
                                    <div className="rating_box">
                                        <span>Rated 4.9 out of 5</span>
                                        <span>10.368 Reviews</span>
                                    </div>
                                    <div className="stars">
                                        <StarIcon color="#162345"/>
                                        <StarIcon color="#162345"/>
                                        <StarIcon color="#162345"/>
                                        <StarIcon color="#162345"/>
                                        <StarIcon color="#162345"/>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </Container>
            </div>
        );
    }
}
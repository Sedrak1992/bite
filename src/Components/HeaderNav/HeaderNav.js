import React, { Component } from 'react'
import "./HeaderNav.css";
import user from '../../images/user.png'
import cart from '../../images/card.svg'

export default class HeaderNav extends Component
{
    constructor()
        {
        super()
        this.state = {
        showCart:false
        }
    }

    show = () => {
        this.setState(({ showCart }) => {
            return {
                showCart: !showCart,
            };
        });
    }

    render() {
        const {showCart} = this.state;
        const {card} = this.props;

        let classListSidebar = "cartBox";
        if (showCart) {
            classListSidebar += " open";
        }
        return (
            <div>
                <nav className="navbar">
                    <div className={classListSidebar}>
                        {card.map((item, index) => {
                            return (
                                <div className="item">
                                    <div className="img_block">
                                        <img src={item.image} alt=""/>
                                    </div>
                                    <div className="info">
                                        <h5 className="name">{item.title}</h5>
                                        <span className="price">${item.price}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div >
                        <a href="#" className="leftNav" onClick={()=>this.show()}>Shop </a>
                        <a href="#" className="leftNav">About us</a>
                        <a href="#" className="leftNav">Sustainability</a>
                    </div>
                    <div>
                    <a href="#" className="centerNav">Bite</a>

                    </div>
                    <div className="rightNav">
                        <a><img src={ user}/></a>
                        <a><img src={ cart}/></a>
                    </div>
                </nav>
            </div>
        )
    }
}

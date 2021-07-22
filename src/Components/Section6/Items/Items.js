import React from "react";
import Product1 from "../Images/Rectangle (18).png";
import Product2 from "../Images/Rectangle (19).png";
import Product3 from "../Images/Rectangle (20).png";
import Product4 from "../Images/Rectangle (21).png";
import Product5 from "../Images/Rectangle (22).png";
import Product6 from "../Images/Rectangle (27).png";
import Product7 from "../Images/Rectangle (23).png";

class Items extends React.Component{
    state = {
        products: [
            {src:Product6,url:Product1},
            {src:Product2,url:Product4},
            {src:Product3,url:Product4},
        ]
    }
    render() {
        const {products} = this.state;
        return(
            <div className='sec6-item-parents'>
                {products.map((item,index) =>{
                    return(
                        <div className='sec6-item-child' style={{backgroundImage: `url(${item.url})`}}>
                            <img src={item.src} alt=""/>
                        </div>
                    )
                })}
                <a href='#'>Why this matters</a>
                <img className='img-button1' src={Product5} alt=""/>
                <img className='img-button3' src={Product5} alt=""/>
                <img className='img-button2' src={Product7} alt=""/>
                <img className='img-button4' src={Product7} alt=""/>
            </div>
        )
    }
}
export default Items
import React from "react";
import Product1 from '../Images/Rectangle (1).png'
import Product2 from '../Images/Rectangle (2).png'
import Product3 from '../Images/Rectangle (3).png'
import Text from '../Images/Meet the future of oral care. (1).png'


class Items extends React.Component{
    state = {
        products: [
            {src: Product1, name: "Toothpaste Bits", price: 'From $7.50 ', date: '/ month'},
            {src: Product2, name: "Mouthwash Bits", price: 'From $5.00 ', date: '/ month'},
            {src: Product3, name: "Whitening Gel", price: 'From $5․00 ', date: '/ month'}
        ]
    }

    render() {
        const {products} = this.state;

        return(
            <div className='item-parents'>
                <div className='item-child1' >
                    <img src={Text} alt=""/>
                    <a href="#">Get started</a>
                </div>
                {products.map((item, index) =>{
                    return(
                        <div className='item-child2' >
                                <img src={item.src} alt=""/>
                                <div className='child2-text'>
                                    <h2>{item.name}</h2>
                                    <p>{item.price}{item.date}</p>
                                </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default Items


import axios from 'axios';
import React from 'react';
import './App.css';
import ProductTable from './ProductSection/productTable.js';

class Appp extends React.Component{
  state = {
    
    product: [{
      prodInfo:[
        {
          newprice:30,
          reted:4.9,
          reviews:10400
        },
        {
          newprice:30,
          reted:4.9,
          reviews:10400
        },
        {
          newprice:30,
          reted:4.9,
          reviews:10400
        },
        {
          newprice:30,
          reted:4.9,
          reviews:10400
        },
        {
          newprice:30,
          reted:4.9,
          reviews:10400
        },
        {
          newprice:30,
          reted:4.9,
          reviews:10400
        },
        {
          newprice:30,
          reted:4.9,
          reviews:10400
        },
        {
          newprice:30,
          reted:4.9,
          reviews:10400
        }
        ]}
    ],
    slider:[]
  }

  componentDidMount(){
    axios.get("https://fakestoreapi.com/products").then(response => {
      const item =  response.data
      const newItem1 =  item.splice(0, 9)
      console.log(item)
      this.setState({
        product: newItem1,
        slider:item
      })
    })
  }
  render(){
    return(
      <div>
      <div className="productTable">
          {this.state.product.map(productinfo=>(
              <ProductTable   {...productinfo}/>
         ))}
        
        </div>
      </div>
    )
  }
}

export default Appp;



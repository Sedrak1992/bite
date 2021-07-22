import React from "react";
import Pic1 from './Images/Rectangle(8).png';
import Pic2 from './Images/Rectangle (9).png';
import Pic3 from './Images/Rectangle (10).png';
import Pic4 from './Images/Rectangle (11).png';
import Pic5 from './Images/Rectangle (12).png';
import Pic6 from './Images/Rectangle (13).png';
import Pic7 from './Images/Rectangle (14).png';
import Pic8 from './Images/Rectangle (15).png';
import Pic9 from './Images/Rectangle (16).png';
import Pic10 from './Images/Rectangle (17).png';
import './Section3.css'

class Pics extends React.Component{
    state = {
        pics: [
            {src:Pic1},
            {src:Pic2},
            {src:Pic3},
            {src:Pic4},
            {src:Pic5},
            {src:Pic6},
            {src:Pic7},
            {src:Pic8},
            {src:Pic9},
            {src:Pic10},
        ]
    };

    render() {
        return(
            <div className='section3'>
                {this.state.pics.map((item,index) =>{
                    return(
                        <img src={item.src} alt=""/>
                    )
                })}
            </div>
        )
    }
}
export default Pics
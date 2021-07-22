import React from "react";
import Items from "./Items/Items";
import Top from "./Top/Top";
import './Section4.css'

class Section4 extends React.Component{
    render() {
        return(
            <section id='section4'>
                <Top/>
                <Items/>
            </section>
        )
    }
}
export default Section4
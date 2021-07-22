import React from "react";
import Top from "./Top/Top";
import Items from "../Section6/Items/Items";
import './Section6.css';

class Section6 extends React.Component{
    render() {
        return(
            <div>
                <Top/>
                <Items/>
            </div>
        )
    }
}
export default Section6
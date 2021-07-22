import React from "react";


class Top extends React.Component{
    render() {
        return(
            <div className='top'>
                <h2>We make your daily routine more sustainable with products that are plastic-free, cruelty-free and made with clean ingredients.</h2>
                <ul>
                    <li>Plastic-free
                        <span>|</span>
                    </li>
                    <li>Clean ingredients
                        <span>|</span>
                    </li>
                    <li>Cruelty-free</li>
                </ul>
            </div>
        )
    }
}

export default Top
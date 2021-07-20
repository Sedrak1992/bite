import React from 'react'
import './slider.css'

class Slider extends React.Component {
     
    render() {
        return (
            <div>
                <div className="SliderBox">
                    <img src={this.props.image} />
                    <div className="SliderProductInfo">
                        <div>
                            <h2>{this.props.title}</h2>
                            <span>{this.props.price} $</span>
                        </div>
                        {console.log(this.props, "offf")}
                    </div>
                </div>
            </div>
        )
    }
}
export default Slider
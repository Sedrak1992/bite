import React from 'react'
import './radioSection.css'

class RadioSEction extends React.Component {
    state ={
        list:[
            {
                title:"Hey. You make us smile, too!",
                text:"We believe in oral care products that are better for you, and the planet. Every product we make is thoughtfully formulated to keep you smiling bright.",
                className:"Radio1"
            },
            {
                title:"Easiest and most effective whitener I’ve tried",
                text:"My teeth are very prone to being yellow from medications, and the only whitening that would really do anything was Smile Sciences. This Bite...",
                className:"Radio2"
            }
            
        ]
    }
    render() {

        return (
            <div className="Radio">
                
                {this.state.list.map(item=>(
                    <div className="RadioBox">
                    <div className={item.className}>
                        <h2>{item.title}</h2>
                        <p>{item.text}</p>
                    </div>
                    <input type="radio" />
                </div>
                ))}
                
            </div>

        )
    }
}
export default RadioSEction
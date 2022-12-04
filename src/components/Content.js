import React from 'react'
import './Content.css'
function Content(props) {
    return (
        props.isNotList ?
            <div className="contentBox">
                <h4>{props.title}</h4>
                <div>{props.content}</div>
            </div>
            :
            <div className="contentBox">
                <h4>{props.title}</h4>
                <div>
                    <p> - {props.content[1]}</p>
                    <p> - {props.content[2]}</p>
                    <p> - {props.content[3]}</p>
                    <p> - {props.content[4]}</p>
                </div>
            </div>
    )
}

export default Content
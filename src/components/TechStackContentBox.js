import React from 'react'
import "./TechStackContentBox.css"
function TechStackContentBox(props) {
    return (
        <div>
            <label htmlFor={props.title.split(' ').join('')}>{props.title}</label>
            <div style={{display: 'inline'}}>
                <span><a href={props.links[0].href}><img src={props.links[0].src} alt={props.links[0].alt} width="40" height="40" /></a></span>
                <span><a href={props.links[1].href}><img src={props.links[1].src} alt={props.links[1].alt} width="40" height="40" /></a></span>
                <span><a href={props.links[2].href}><img src={props.links[2].src} alt={props.links[2].alt} width="40" height="40" /></a></span>
            </div>
        </div>
    )
}

export default TechStackContentBox;
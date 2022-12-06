import React from 'react'
import './Navigation.css'
function Navigation(props) {
    return (
        <div className="navigation topNav" id="myTopnav">
            <div>
                <header>
                    <nav className="navigation-bar">
                        {/* <div className="logo">
                            <img src="investo.png" alt="logo" className="logoImage" />
                        </div> */}
                        <ul>
                            <li><a className="links" href="#home">Home</a></li>
                            <li><a className="links" href="#aboutApp">About App</a></li>
                            <li><a className="links" href="#documentation">Documentation</a></li>
                            <li><a className="links" href="#aboutUs">About Us</a></li>
                            <li>
                                {/* <div className="form-check form-switch">
                                    <input className="form-check-input alignCenter" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked onClick={props.toggleMode} />
                                </div> */}
                            <button onClick={props.toggleMode}><img src={props.imageURL} alt="" style={{'width':'20px','height':'20px'}}></img></button>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    )
}

export default Navigation
import React from "react";
import 'remixicon/fonts/remixicon.css';

const IconContainer = (props) =>{
    return(
        <div className="iconContainer">
            {props.children}
        </div>
    )
}

export const Navigation = () => {
    return (
        <nav className="sideNavigation">
            <a href="/">
                <IconContainer>
                    <i className="ri-home-line"/>
                </IconContainer>
                <span>Test</span>
            </a>
        </nav>
    )
}
import React from "react";

function SearchBox(){

    return (
        <div id="search">
            <input id="input" placeholder="Search..."/>
            <button id="button"><i className="fa fa-search"></i></button>
            <div className="spinner"><i className="fa fa-spinner"></i></div>
        </div>
    )
}
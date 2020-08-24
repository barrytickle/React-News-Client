import React from "react";

export default function SearchBox(){

    return (
        <div className="searchBox">
            <input type="text"/>
            <button type="submit">
                <i className="ri-search-line"></i>
            </button>
        </div>
    )
}
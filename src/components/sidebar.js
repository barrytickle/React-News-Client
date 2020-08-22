import React, {useContext} from "react";
import {Navigation} from './nav';
import {AuthContext} from "../context/auth";



export const Sidebar = () => {
    return(
        <aside className="navigation-sidebar">
                <Navigation/>
        </aside>
    )
}
import React, {useContext} from "react";
import Navigation from './nav';
import Weather from '../secure/getTimezone';

export const Sidebar = () => {
    return(
        <aside className="navigation-sidebar">
                <Navigation/>
        </aside>
    )
}
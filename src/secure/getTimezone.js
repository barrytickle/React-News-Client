import React from "react";
import {LocationDataConsumer}  from "../context/location";
function getTimezone(props){

    return(
        <LocationDataConsumer>
            {context=> window.navigator.geolocation
                .getCurrentPosition(context.geo, console.log)}
        </LocationDataConsumer>
    )
}
getTimezone.contextType = LocationDataConsumer;
export default getTimezone;


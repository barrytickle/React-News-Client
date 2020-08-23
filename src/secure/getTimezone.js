import React from "react";
import {LocationDataConsumer}  from "../context/location";
function GetTimezone(props){
    return(
        <LocationDataConsumer>
            {context=> {
                return (context.sent ? window.navigator.geolocation.getCurrentPosition(context.geo, console.log) : '')
                }
            }
        </LocationDataConsumer>
    )
}
GetTimezone.contextType = LocationDataConsumer;
export default GetTimezone;


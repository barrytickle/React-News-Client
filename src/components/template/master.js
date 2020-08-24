import React from "react";
import {LocationDataConsumer} from '../../context/location';

export default class Master extends React.Component{
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        Header content
                    </div>
                    <div className="col-xs-12 col-md-5">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

import React from "react";
import {RedirectConsumer} from "../../context/login";

export default class Master extends React.Component{
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="row  middle-xs between-xs" style={{height:150}}>
                            <div className="col-xs-12 col-md-5">
                                <RedirectConsumer>
                                    {context =>
                                    {
                                        if(context.getAuth !== ''){
                                            let auth = JSON.parse(context.getAuth);
                                            console.log(auth);

                                            auth = auth[0].fullname

                                            return <span className="largeTitle">Hello, <span style={{opacity:"0.3", fontWeight:"500"}}>{auth}</span></span>
                                        }
                                    }
                                    }
                                </RedirectConsumer>
                            </div>
                            <div className="col-xs-12 col-md-5">
                                {/*Add Search Bar here */}
                                <div className="searchBox">
                                    <input type="text"/>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-5">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

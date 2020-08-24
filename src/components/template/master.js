import React from "react";
import {RedirectConsumer} from "../../context/login";
import SearchBox from '../searchBox';

export default class Master extends React.Component{
    render(){
        return (
            <main>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="row  middle-xs between-xs" style={{height:150}}>
                            <div className="col-xs-12 col-md-6">
                                <RedirectConsumer>
                                    {context =>
                                    {
                                        if(context.getAuth !== ''){
                                            let auth = JSON.parse(context.getAuth);
                                            console.log(auth);

                                            auth = auth[0].fullname

                                            const d = new Date();
                                            let time;
                                            if(d.getHours() < 12){
                                                time = {
                                                    icon:'sun.svg',
                                                    message: 'Morning'
                                                }
                                            }else{
                                                time = {
                                                    icon: 'evening.svg',
                                                    message: 'evening'
                                                }
                                            }

                                            // console.log(d.getHours());
                                            return <span className="largeTitle"><img className= " weatherIcon" src={'/images/icons/weather/'+time.icon}/> Good {time.message}, <span style={{marginLeft:15}}> {auth}</span></span>
                                        }
                                    }
                                    }
                                </RedirectConsumer>
                            </div>
                            <div className="col-xs-12 col-md-6">
                                <div class="row end-md">
                                    <SearchBox/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-5">
                        {this.props.children}
                    </div>
                </div>
            </main>
        )
    }
}

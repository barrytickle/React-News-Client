import React from "react";
import 'remixicon/fonts/remixicon.css';
import Cookie from '../secure/cookie';
import Clock from 'react-live-clock';
import {LocationDataConsumer} from '../context/location';

export default class Navigation extends React.Component{
    constructor(props){
        super(props);
    }

    bannerProfile(banner){
        if(typeof banner == 'object'){
            return (
                <div className="row">
                    <div className="col-xs-12 col-md-5">
                        <div className="profileImage" style={{backgroundImage:`url(images/users/${banner.image}`}}/>

                    </div>
                    <div className="col-xs-12 col-md-5 middle-md">
                        <p>{banner.fullname}</p>
                        <p className="username">{banner.username}</p>
                    </div>
                </div>
            )
        }else{
            return <p>Please login to continue</p>;
        }
    }

    profileBanner(){
        const cookie = new Cookie();
        if(cookie.get('auth')){
            return JSON.parse(cookie.get('auth'));
        }else{
            return 'Please sign in to continue';
        }
    }

    componentDidMount() {
        return(
            <LocationDataConsumer>
                {context => (
                    window.navigator.geolocation
                        .getCurrentPosition(context.geo, console.log)
                    )
                }
            </LocationDataConsumer>
        )
    }

    render(){
        const banner = this.profileBanner();
        const BannerProfile = this.bannerProfile(banner[0]);
        return (
            <div>

                <nav className="sideNavigation">
                    <LocationDataConsumer>
                        {context => (
                            <Clock format={'HH:mm'} ticking={true} timezone={context.tz}/>
                        )}
                    </LocationDataConsumer>

                    <div className="profileBanner">
                        {BannerProfile}
                    </div>
                    <a href="/" className="row middle-xs active">
                        <div className="iconContainer">
                            <i className="ri-home-line"/>
                        </div>
                        <span>Home</span>
                    </a>
                    <a href="/" className="row middle-xs">
                        <div className="iconContainer">
                            <i className="ri-home-line"/>
                        </div>
                        <span>Home</span>
                    </a>
                    <a href="/" className="row middle-xs">
                        <div className="iconContainer">
                            <i className="ri-home-line"/>
                        </div>
                        <span>Home</span>
                    </a>
                    <a href="/" className="row middle-xs">
                        <div className="iconContainer">
                            <i className="ri-home-line"/>
                        </div>
                        <span>Home</span>
                    </a>
                    <a href="/" className="row middle-xs">
                        <div className="iconContainer">
                            <i className="ri-home-line"/>
                        </div>
                        <span>Home</span>
                    </a>
                    <a href="/" className="row middle-xs">
                        <div className="iconContainer">
                            <i className="ri-home-line"/>
                        </div>
                        <span>Home</span>
                    </a>
                </nav>
            </div>
        )
    }
}
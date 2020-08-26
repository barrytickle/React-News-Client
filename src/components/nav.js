import React from "react";
import 'remixicon/fonts/remixicon.css';
import Cookie from '../secure/cookie';
import Clock from 'react-live-clock';
import {LocationDataConsumer} from '../context/location';
import {RedirectConsumer} from "../context/login";


export default class Navigation extends React.Component{
    constructor(props){
        super(props);
    }

    bannerProfile(banner){
            return (
                <RedirectConsumer>
                    {context => {
                        const cookie = new Cookie();
                        if(context.getAuth === ''){
                            return <p>Please login to continue</p>
                        }else{
                            let banner = JSON.parse(context.getAuth);
                            banner = banner[0];
                            return (
                                <div className="row middle-md">
                                        <div className="profileImage"
                                             style={{backgroundImage: `url(/images/users/${banner.image}`}}/>
                                        <p className="username">{banner.username}</p>
                                </div>
                            )
                        }

                    }}
                </RedirectConsumer>

            )
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
                    <div className="profileBanner">
                        {BannerProfile}
                        <LocationDataConsumer>
                            {context => (
                                <Clock style={{marginTop:"30px", display:"block", fontSize:"24px" ,fontWeight:"400"}} format={'dddd Do MMMM'} ticking={true} timezone={context.tz}/>

                            )}
                        </LocationDataConsumer>
                        <LocationDataConsumer>
                            {context => (
                                <Clock style={{display:"block", opacity:"0.3", fontSize:"24px", fontWeight:"400", marginTop:0}} format={'HH:mm'} ticking={true} timezone={context.tz}/>

                            )}
                        </LocationDataConsumer>
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
                    <RedirectConsumer>
                        {context => {
                            if (context.getAuth !== '') {
                                return (
                                    <a href="/logout" className="row middle-xs logout">
                                        <div className="iconContainer">
                                            <i className="ri-shut-down-line"></i>
                                        </div>
                                        <span>Logout</span>
                                    </a>
                                )
                            }else{
                               return (
                                   <a href="/login" className="row middle-xs" style={{width:"85%"}}>
                                       <div className="iconContainer">
                                           <i className="ri-login-circle-line"></i>
                                       </div>
                                       <span>Login</span>
                                   </a>
                               )
                            }
                        }
                        }
                        </RedirectConsumer>
                </nav>
            </div>
        )
    }
}
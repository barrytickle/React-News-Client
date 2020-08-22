import React from "react";
import 'remixicon/fonts/remixicon.css';
import Cookie from '../secure/cookie';


const IconContainer = (props) => {
    return(
        <div className="iconContainer">
            {props.children}
        </div>
    )
}

export default class Navigation extends React.Component{
    constructor(){
        super();
        window.navigator.geolocation
            .getCurrentPosition(console.log, console.log);

    }

    bannerProfile(banner){
        if(typeof banner == 'object'){
            console.log(banner);
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
            return <p>Please login to continue</p>
        }
    }


    profileBanner(){
        const cookie = new Cookie;
        if(cookie.get('auth')){
            return JSON.parse(cookie.get('auth'));
        }else{
            return 'Please sign in to continue';
        }
    }

    render(){
        const banner = this.profileBanner();
        const BannerProfile = this.bannerProfile(banner[0]);
        return (
            <div>
                <nav className="sideNavigation">
                    <div className="profileBanner">
                        <BannerProfile banner={banner}/>
                    </div>
                    <a href="/" className="row middle-xs active">
                        <IconContainer>
                            <i className="ri-home-line"/>
                        </IconContainer>
                        <span>Home</span>
                    </a>
                    <a href="/" className="row middle-xs">
                        <IconContainer>
                            <i className="ri-home-line"/>
                        </IconContainer>
                        <span>Home</span>
                    </a>
                    <a href="/" className="row middle-xs">
                        <IconContainer>
                            <i className="ri-home-line"/>
                        </IconContainer>
                        <span>Home</span>
                    </a>
                    <a href="/" className="row middle-xs">
                        <IconContainer>
                            <i className="ri-home-line"/>
                        </IconContainer>
                        <span>Home</span>
                    </a>
                    <a href="/" className="row middle-xs">
                        <IconContainer>
                            <i className="ri-home-line"/>
                        </IconContainer>
                        <span>Home</span>
                    </a>
                    <a href="/" className="row middle-xs">
                        <IconContainer>
                            <i className="ri-home-line"/>
                        </IconContainer>
                        <span>Home</span>
                    </a>
                </nav>
            </div>
        )
    }
}
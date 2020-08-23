import React from "react";
import 'remixicon/fonts/remixicon.css';
import Cookie from '../secure/cookie';
import Gateway from '../secure/gateway';
import Clock from 'react-live-clock';


export default class Navigation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lat: '',
            lon: '',
            apiKey: 'AvZfaAKwnosHB6qhfXvRuI8csdHAaxLK8Q94mKJ7QyXwGPaY9k7L_L6Hfi3XLRu4'
        }
        this.geo = this.geo.bind(this);
        this.checkWeather = this.checkWeather.bind(this);
    }


    async checkWeather(lat, lon){
        // http://api.openweathermap.org/data/2.5/weather?lat=53.454834&lon=-2.6497727&appid=68b09ba0edbf7196390168b7fc5cf299
        //https://openweathermap.org/weather-conditions

        const gateway = new Gateway();
        const url = "http://localhost:9000/fetch";
        const params = "";
        const body = {
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
                "url": `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=68b09ba0edbf7196390168b7fc5cf299`,
                "method":'GET',
                "params":''
            })
        }

        return gateway.send(url, params, body);

    }

    async geo(pos){
        let data = await this.getTimezone(pos.coords.latitude,pos.coords.longitude);
        data = JSON.parse(data);
        const timezone = data.resourceSets[0].resources[0].timeZone.abbreviation;

        let weather = await this.checkWeather(pos.coords.latitude, pos.coords.longitude);
        weather = JSON.parse(weather);
        console.log(weather);

        const city = weather.name;
        const temp = Math.ceil(weather.main.temp - 273.15);

        const currentWeather = {
            temp: temp,
            weather: weather.weather[0].main
        }

        this.setState({
            timezone: timezone,
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
            weather: currentWeather,
            city:city
        });

        console.log(this.state);
    }

    async getTimezone(lat, lon){
        // https://dev.virtualearth.net/REST/v1/timezone/61.768335,-158.808765?key={BingMapsAPIKey}
        const gateway = new Gateway();
        const url = "http://localhost:9000/fetch";
        const params = "";
        const body = {
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
                "url": `https://dev.virtualearth.net/REST/v1/timezone/${lat},${lon}`,
                "method":'GET',
                "params":`?key=${this.state.apiKey}`
            })
        }
        return gateway.send(url, params, body);
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

    async componentDidMount() {
        window.navigator.geolocation
            .getCurrentPosition(this.geo, console.log);
    }

    render(){
        const banner = this.profileBanner();
        const BannerProfile = this.bannerProfile(banner[0]);
        const weather = this.checkWeather();
        return (
            <div>
                <nav className="sideNavigation">
                    <Clock format={'HH:mm'} ticking={true} timezone={this.state.timezone}/>
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
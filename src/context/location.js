import React, {Component} from 'react';
import Gateway from "../secure/gateway";
const {Provider, Consumer}  = React.createContext();

class LocationDataProvider extends Component{
    constructor(props){
        super(props);
        this.state = {
            city: 'Haydock',
            weather:'sunny',
            apiKey: 'AvZfaAKwnosHB6qhfXvRuI8csdHAaxLK8Q94mKJ7QyXwGPaY9k7L_L6Hfi3XLRu4'
        };


        this.geo = this.geo.bind(this);
        this.getTimezone = this.getTimezone.bind(this);
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

    async geo(pos){
        let data = await this.getTimezone(pos.coords.latitude,pos.coords.longitude);
        data = JSON.parse(data);

        const timezone = data.resourceSets[0].resources[0].timeZone.abbreviation;

        let weather = await this.checkWeather(pos.coords.latitude, pos.coords.longitude);
        weather = JSON.parse(weather);

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
    }

     render(){
         return(
             <Provider value={{city: this.state.city, weather:this.state.weather, tz:this.state.timezone, geo:this.geo}}>
                 {this.props.children}
             </Provider>
         )
     }
}
export {LocationDataProvider, Consumer as LocationDataConsumer}

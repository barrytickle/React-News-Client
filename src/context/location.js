import React, {Component} from 'react';
import Gateway from "../secure/gateway";
const {Provider, Consumer}  = React.createContext();

class LocationDataProvider extends Component{
    constructor(props){
        super(props);
        this.state = {
            city: '',
            weather:'',
            sent: false,
            apiKey: 'AvZfaAKwnosHB6qhfXvRuI8csdHAaxLK8Q94mKJ7QyXwGPaY9k7L_L6Hfi3XLRu4'
        };

        this.geo = this.geo.bind(this);
        this.getTimezone = this.getTimezone.bind(this);
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

        this.setState({
            timezone: timezone,
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
            sent:true
        });

    }

     render(){
         return(
             <Provider value={{city: this.state.city, weather:this.state.weather, tz:this.state.timezone, geo:this.geo, sent:this.state.sent}}>
                 {this.props.children}
             </Provider>
         )
     }
}
export {LocationDataProvider, Consumer as LocationDataConsumer}

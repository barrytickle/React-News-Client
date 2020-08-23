import React from 'react';
import './App.css';
import {Sidebar} from "./components/sidebar";
import Routes from './routes';
import GetTimezone from "./secure/getTimezone";

class App extends React.Component {
    render(){
        return(
            <div className="row">
                <GetTimezone/>
                <div className="col-xs-12 col-md-3 col-lg-2">
                    <Sidebar/>
                </div>
                <div className="col-xs-12 col-md-9 col-lg-10">
                    <Routes />
                </div>
            </div>
        )
    }
}
export default App;
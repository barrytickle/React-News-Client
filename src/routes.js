import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './components/login';
import Cookie from './secure/cookie';
import logout from './secure/logout';

class Routes extends React.Component{
    constructor(){
        super();
        const auth = this.checkAuth();

        this.state = {
            auth: auth
        }
    }

    checkAuth(){
        const cookie = new Cookie();
        return cookie.get('auth') !== '' ? cookie.get('auth') : '';
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login">
                        {this.state.auth === '' ? <Login/> : ''}
                    </Route>

                    <Route path="/logout">
                        {logout}
                    </Route>
                    <Route path="/">
                        <div className="container">
                            {/*<Hero/>*/}
                            <h1>Hello World</h1>
                        </div>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default Routes;
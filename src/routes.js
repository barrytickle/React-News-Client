import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Redirect} from 'react-router-dom';
import Login from './components/login';
import Cookie from './secure/cookie';
import Logout from './secure/logout';
import Master from './components/template/landing';
import {RedirectConsumer} from './context/login';

const logout = new Logout();

class Routes extends React.Component{
    constructor(){
        super();
        // const auth = this.checkAuth();

        this.state = {
            auth: '',
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
                        <RedirectConsumer>
                            {context => {
                                if(context.newLink !== null){
                                    this.setState({
                                        redirect: context.newLink,
                                        auth: JSON.parse(context.getAuth)
                                    })
                                    return (
                                        // console.log(this.state.auth)
                                        <Redirect to={this.state.redirect}/>
                                    )
                                }
                            }}
                        </RedirectConsumer>
                    </Route>
                    <Route path="/logout">
                        <RedirectConsumer>
                            {context => {
                                this.setState({
                                    redirect: '/',
                                    auth:''
                                });
                                context.addDetails('/','');

                                return (
                                    <Redirect to={this.state.redirect}/>
                                )
                            }}
                        </RedirectConsumer>
                    </Route>
                    <Route path="/">
                        <div className="container">
                            <Master/>
                        </div>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default Routes;
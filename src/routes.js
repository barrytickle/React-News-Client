import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import {Redirect} from 'react-router-dom';
import Login from './components/login';
import Cookie from './secure/cookie';
import {RedirectConsumer} from './context/login';
import FormComponent from './components/formComponent';

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
                                const cookie = new Cookie();
                                cookie.delete('auth');

                                return (
                                    <Redirect to={this.state.redirect}/>
                                )
                            }}
                        </RedirectConsumer>
                    </Route>
                    <Route path="/create/:param" children={<FormComponent/>}/>
                    <Route path="/">
                        <div className="container">
                        </div>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default Routes;
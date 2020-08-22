import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {AuthContext, AuthProvider} from './context/auth';
import Login from './components/login';
import Cookie from './secure/cookie';
import logout from './secure/logout';


class AppComponent extends React.Component{
    static contextType = AuthContext;
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
                        <AuthProvider>
                            {this.state.auth === '' ? <Login/> : ''}
                        </AuthProvider>
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

function App(){
    return(
        <AuthProvider>
            <AppComponent/>
        </AuthProvider>
    )
}

export default App;
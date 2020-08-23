import React, {Component} from 'react';
import Cookie from "../secure/cookie";


const {Provider, Consumer}  = React.createContext();

class RedirectProvider extends Component{
    constructor(props){
        super(props);
        const cookie = new Cookie();
        // if()
        console.log('Auth check');

        if(cookie.get('auth')){
            this.state = {
                redirect: '/',
                auth:cookie.get('auth')
            }
        }else{
            this.state = {
                redirect:null,
                auth:''
            };
        }


    }

    setRedirect = (redirect) => {
        this.setState({
            redirect: redirect
        });
    }

    addDetails = (redirect, auth) => {
        this.setState({
            redirect: redirect,
            auth: auth
        })
    }

    render(){
        return(
            <Provider value={{redirect:this.setRedirect, newLink: this.state.redirect, addDetails:this.addDetails, getAuth: this.state.auth}}>
                {this.props.children}
            </Provider>
        )
    }
}
export {RedirectProvider, Consumer as RedirectConsumer}

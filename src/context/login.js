import React, {Component} from 'react';
const {Provider, Consumer}  = React.createContext();

class RedirectProvider extends Component{
    constructor(props){
        super(props);
        this.state = {
            redirect:null,
            auth:''
        };
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

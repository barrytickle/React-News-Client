import React, {useContext} from "react";
import {AuthContext, AuthProvider} from '../context/auth';
import Gateway from '../secure/gateway';
import Cookie from '../secure/cookie';

 class Login extends React.Component{
     static contextType = AuthContext;
     constructor() {
        super();
        this.state = {
            username:'',
            password:'',
            message:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.auth = this.auth.bind(this);
    }
    handleChange(e){
        const name = e.target.name;
        const val = e.target.value;
        this.setState({
            [name]:val
        });
    }
    async auth(event){
        event.preventDefault();
        const body = this.state;
        const gateway = new Gateway();
        const postOptions = {
            method: 'POST'
        }
        const url = 'http://localhost:9000/news/auth';
        const params = `?username=${body.username}&password=${body.password}`;
        const data =  await gateway.send(url, params, postOptions);

        console.log(data);

        const cookie = new Cookie();

        if(!data.includes('Error')){
            if(!cookie.check('auth')){
                cookie.set('auth', data, '30');
            }
        }else{
            this.setState({message: 'Error, username or password is not correct'});
        }

    }

     render(){
        return(
            <form onSubmit={this.auth} action="#" >
                <input type="text" name="username" onChange={(e) => this.handleChange(e)}/>
                <input type="text" name="password" onChange={(e) => this.handleChange(e)}/>
                <input type="submit"/>
                {this.state.message}

            </form>
        )
    }
}

export default Login;
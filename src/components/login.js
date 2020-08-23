import React, {useContext} from "react";
import Gateway from '../secure/gateway';
import Cookie from '../secure/cookie';
import {RedirectConsumer} from "../context/login";


 class Login extends React.Component{
     constructor() {
        super();
        this.state = {
            username:'',
            password:'',
            message:'',
            success:false,
            auth: ''
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
        const cookie = new Cookie();

        if(!data.includes('Error')){
            this.setState({success: true, auth:data});
        }else{
            this.setState({message: 'Error, username or password is not correct'});
        }
    }
     render(){
         console.log(this.state);
        return(
            <form onSubmit={this.auth} action="#" >
                <input type="text" name="username" onChange={(e) => this.handleChange(e)}/>
                <input type="text" name="password" onChange={(e) => this.handleChange(e)}/>
                <input type="submit"/>
                <RedirectConsumer>
                    {context => {
                        if(this.state.success){
                            context.addDetails('/', this.state.auth);
                            console.log(context);
                        }
                    }}
                </RedirectConsumer>
                {/*{this.state.success ?  : this.state.message}*/}
            </form>
        )
    }
}

export default Login;
import Cookie from './cookie';
import React from "react";
import { useHistory } from "react-router-dom";

export default class Logout extends React.Component{
   render(){
       const cookie = new Cookie();
       cookie.delete('auth');
       const history = useHistory();
       return history.push('/');

   }


}
import React from 'react';
import Gateway from '../secure/gateway';
import {config} from "../secure/config";

export default class Actions extends React.Component{

    async getRoles(){
        const gateway = new Gateway();
        const requestOption = {
            method: "GET"
        }
        const roles = await gateway.send(`${config.GatewayUrl}/find/roles/all`,'',requestOption);
    }

}
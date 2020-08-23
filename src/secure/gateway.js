import React, {Component} from 'react';

export default class Gateway extends Component{
    constructor(props){
        super();
        this.send = this.send.bind(this);
    }
    async send(url, params, requestOptions){
        return await fetch(url + params, requestOptions)
            .then((data) => {
                return data.text()
            })
            .catch((err) => {
                return 'error ' + err
            });
    }
}
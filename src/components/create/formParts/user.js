import React from 'react';
import TextField from "@material-ui/core/TextField";
export default function UserFormComponent(){
    return(
        <div className="row">
            <div className="row between-md">
                <TextField variant="filled" label="First Name" name="FirstName"/>
                <TextField variant="filled" label="Last Name" name="LastName"/>
            </div>
            <div className="row">
                <TextField variant="filled" label="role" name="lastName" />
            </div>
        </div>


    )
}
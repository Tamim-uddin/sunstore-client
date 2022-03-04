import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Alert, Button } from '@mui/material';

const Makeadmin = () => {
    const [email, setemail] = useState('');
    const [seuccess, setsuccess] = useState(false);

    const handleonBlur = e => {
        setemail(e.target.value);
    }

    const handleonSubmit = e => {
        const user = {email};
        fetch('https://stark-gorge-54734.herokuapp.com/users/admin' , {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                setsuccess(true);
            }
        })
     e.preventDefault();
    }

    return (
        <div>
            <h2>this is make admin</h2>
            <form onSubmit={handleonSubmit}>
            <TextField
            type='email'
             label="Email" 
             onBlur={handleonBlur}
             variant="standard" /> <br />
             <Button type='submit' variant="contained">Contained</Button>
            </form>
            {seuccess && <Alert severity="success">Make admin successfully</Alert>}
        </div>
    );
};

export default Makeadmin;
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Alert, Button, Grid, Paper } from '@mui/material';

const Makeadmin = () => {
    const [email, setemail] = useState('');
    const [success, setsuccess] = useState(false);

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
        <>
           <Grid sx={{mt: '60px'}} >
             <Paper elevation={10} style={{padding: '20px', height: '35vh', width: 290, margin: 'auto', border: '1px solid #614051'}}>
                <Grid  align="center">
            <h2 style={{fontFamily:'"Playfair Display",serif', marginTop: '20px', color:'#303030'}}>Make an Admin</h2></Grid>
            <form onSubmit={handleonSubmit}>
            <TextField 
             fullWidth
             type="email"
             label="Email" 
             onBlur={handleonBlur}
             variant="standard" /><br />
             <Button sx={{mt: '5px', mb: '5px', backgroundColor: '#614051'}} type='submit' variant="contained">MAke admin</Button>
            </form>
            </Paper>
            {success && <Alert severity="success">Made Admin Successfully </Alert>}
        </Grid>
        </>
    );
};

export default Makeadmin;
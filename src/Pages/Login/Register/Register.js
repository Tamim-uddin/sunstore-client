import { Alert, Box, Button, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';


const Register = () => {
    const {user, error, register, isloading} = useAuth();
    const [loginData, setloginData] = useState({});
    const navigate = useNavigate(); 
     
    if(isloading){
        return<CircularProgress />
    }

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newloginData = {...loginData};
        newloginData[field] = value;
        console.log(field, value, newloginData);
        setloginData(newloginData);
    }
    
    const handleOnSubmit = e => {
        e.preventDefault();
        if(loginData.password !== loginData.password2){
            alert('Your password did not match');
            return;
            }
        register(loginData.email, loginData.password, loginData.name, navigate);
    }
    
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6} sx={{mt: '150px', textAlign: 'center'}}>
                    <Typography variant="h3" gutterBottom component="div">
                        Please Register
                    </Typography>
                    <form onSubmit={handleOnSubmit}>
                    <TextField 
                    sx={{width: '75%'}}
                    label="Your Name" 
                    name="name"
                    onBlur={handleOnBlur}
                    variant="standard" /> <br />
                    <TextField 
                    sx={{width: '75%'}}
                    label="Your Email" 
                    name="email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" /> <br />
                    <TextField 
                    sx={{width: '60%'}}
                    label="Your Password" 
                    name="password"
                    type="password"
                    onBlur={handleOnBlur}
                    variant="standard" /> <br />
                    <TextField 
                    sx={{width: '45%', mb: '5px'}}
                    label="Retype Password" 
                    name="password2"
                    type="password"
                    onBlur={handleOnBlur}
                    variant="standard" /> <br />
                    <Button type='submit' variant='contained'  >Sign Up <ExitToAppRoundedIcon sx={{fontSize: 'medium', ml: '5px'}}/></Button><br />
                    <NavLink to="/login">Already Register?Please LogIn</NavLink>
                    </form> <br />
                    {user.email && <Alert severity="success" sx={{width: '75%'}}>Successfully Register</Alert>};
                    {error && <Alert severity="error" sx={{width: '75%'}}>{error}</Alert>}
                </Grid>
            </Grid>
        </Box>
    );
};

export default Register;
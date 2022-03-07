import { Alert, Avatar, Box, Button, CircularProgress, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import banner6 from '../../../Image/Background/bg6.jpg';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


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
            <Grid container spacing={2}  sx={{mt: '40px'}}>
            <Grid xs={12} sm={12} md={6}>
                        <img style={{width: '100%'}} src={banner6} alt='' />
                    </Grid>
                    <Paper elevation={10} style={{padding: '20px', height: '75vh', width: 320, margin: 'auto',  border: '1px solid #614051', marginTop: '30px'}}>
            <Grid xs={12} sm={12} md={12} align="center">
            <Avatar sx={{backgroundColor: '#614051', mt: '20px'}}><LockOutlinedIcon /></Avatar>
            <h1 style={{fontFamily:'"Playfair Display",serif', marginTop: '20px', color:'#303030'}}>Please Register</h1>
                    <form onSubmit={handleOnSubmit}>
                    <TextField 
                    fullWidth
                    label="Your Name" 
                    name="name"
                    onBlur={handleOnBlur}
                    variant="standard" /> <br />
                    <TextField 
                    fullWidth
                    label="Your Email" 
                    name="email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" /> <br />
                    <TextField 
                    fullWidth
                    label="Your Password" 
                    name="password"
                    type="password"
                    onBlur={handleOnBlur}
                    variant="standard" /> <br />
                    <TextField 
                    fullWidth
                    label="Retype Password" 
                    name="password2"
                    type="password"
                    onBlur={handleOnBlur}
                    variant="standard" /> <br />
                    <Button type='submit' variant='contained' sx={{fontSize: 'medium', backgroundColor: '#614051', mt: '5px'}}>Sign Up <ExitToAppRoundedIcon sx={{fontSize: 'medium', ml: '5px'}}/></Button><br />
                    </form>
                    <NavLink to="/login" style={{color: '#614051'}}>Already Register?Please LogIn</NavLink> 
                </Grid>
                </Paper>
                    {user.email && <Alert severity="success" sx={{width: '75%'}}>Successfully Register</Alert>};
                    {error && <Alert severity="error" sx={{width: '75%'}}>{error}</Alert>}
            </Grid>
        </Box>
    );
};

export default Register;
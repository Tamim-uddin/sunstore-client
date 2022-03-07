import { Alert, Avatar, Button, CircularProgress, Grid, Paper, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { FcGoogle } from "react-icons/fc";
import banner6 from '../../../Image/Background/bg6.jpg'


const Login = () => {
    const {user, signinwithgoogle, isloading, error, login} = useAuth();
    const [loginData, setloginData] = useState({});
    const location = useLocation();
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
        login(loginData.email, loginData.password, location, navigate)
    }


    const handleGoogleLogin = () => {
        signinwithgoogle(location, navigate);
    }
    return (
        <Box>
            <Grid container spacing={2} sx={{mt: '40px'}}>
                <Grid xs={12} sm={12} md={6}>
                        <img style={{width: '100%'}} src={banner6} alt='' />
                    </Grid>
            <Paper elevation={10} style={{padding: '20px', height: '70vh', width: 280, margin: 'auto',  border: '1px solid #614051', marginTop: '30px'}}>
            <Grid xs={12} sm={12} md={12} align="center">
            <Avatar sx={{backgroundColor: '#614051', mt: '20px'}}><LockOutlinedIcon /></Avatar>
            <h1 style={{fontFamily:'"Playfair Display",serif', marginTop: '20px', color:'#303030'}}>Please Login</h1>
                
                    <form onSubmit={handleOnSubmit}>
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
                    <Button type='submit' variant='contained' sx={{fontSize: 'medium', backgroundColor: '#614051', mt: '5px'}} >Sign In <LoginRoundedIcon sx={{fontSize: 'medium', ml: '5px'}}/></Button><br />
                    </form> 
                    <Button onClick={handleGoogleLogin} type="submit" variant='text' ><FcGoogle style={{fontSize: '30px'}}/></Button> <br />
                    <NavLink to="/register" style={{color: '#614051'}}>New here?Please Register</NavLink> <br />  
                    </Grid>
                </Paper>
                {user.email && <Alert severity="success" sx={{width: '75%'}}>Successfully Login</Alert>};
                    {error && <Alert severity="error" sx={{width: '75%'}}>{error}</Alert>} 
            </Grid> 
        </Box>
    );
};

export default Login;
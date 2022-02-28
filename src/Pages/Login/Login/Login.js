import { Alert, Button, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';

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
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6} sx={{mt: '150px', textAlign: 'center'}}>
                    <Typography variant="h3" gutterBottom component="div">
                        Please SignIn
                    </Typography>
                    <form onSubmit={handleOnSubmit}>
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
                    <Button type='submit' variant='contained'  >Sign In <LoginRoundedIcon sx={{fontSize: 'medium', ml: '5px'}}/></Button><br />
                    </form> <br />
                    <button onClick={handleGoogleLogin} type="submit" class="btn btn-warning">Google Signin</button> <br />
                    <NavLink to="/register">New here?Please Register</NavLink> <br />
                    {user.email && <Alert severity="success" sx={{width: '75%'}}>Successfully Login</Alert>};
                    {error && <Alert severity="error" sx={{width: '75%'}}>{error}</Alert>}   
                </Grid>
            </Grid> 
        </Box>
    );
};

export default Login;
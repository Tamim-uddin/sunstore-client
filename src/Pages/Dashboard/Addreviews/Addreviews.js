import { Button, Grid, Paper } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import './Addreviews.css';

const Addreviews = () => {
    const {user} = useAuth();
    const userPhoto = user?.photoURL;
    const navigate = useNavigate();
    const location = useLocation();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

            axios.post('https://stark-gorge-54734.herokuapp.com/reviews', data)
            .then(res => {
                console.log(res)
            });

            const redierect_uri = location.state?.from || '/';
            navigate(redierect_uri);

    }
    return (
        <>
        
        <Grid sx={{mt: '60px'}}>
             <Paper elevation={10} style={{padding: '20px', height: '55vh', width: 320, margin: 'auto', border: '1px solid #614051'}}>
             <Grid align="center">
            <h2 style={{fontFamily:'"Playfair Display",serif', marginBottom: '25px', marginTop: '30px'}}>Add Review</h2></Grid>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input Value={userPhoto} disabled {...register("img")} placeholder="Img Url" style={{width: '100%', marginBottom: '5px', border: '1px solid #909195', borderRadius: '5px'}}/> <br />
                <input {...register("name")} value={user?.displayName} placeholder="Your Name" style={{width: '100%', marginBottom: '5px', border: '1px solid #909195', borderRadius: '5px'}}/> <br />
                <input {...register("email")} value={user?.email} placeholder="Your Email" style={{width: '100%', marginBottom: '5px', border: '1px solid #909195', borderRadius: '5px'}}/> <br />
                <textarea {...register("des")} required placeholder="What do you want to say" style={{width: '100%', marginBottom: '5px', border: '1px solid #909195', borderRadius: '5px'}}/> <br />
                <Button type='submit' variant='contained' sx={{backgroundColor: '#614051'}} >Add</Button>
            </form>
            </Paper>
        </Grid>
        </>
    );
};

export default Addreviews;
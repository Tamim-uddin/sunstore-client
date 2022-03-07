import { Button, Grid, Paper } from '@mui/material';
import axios from 'axios';
import React from 'react';

import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router-dom';
import './Addproducts.css'; 
const Addproducts = () => {
  const navigate = useNavigate();
  const location = useLocation();
    const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);

    axios.post('https://stark-gorge-54734.herokuapp.com/products', data)
    .then(res => {
        console.log(res);
    })

    const redierect_uri = location.state?.from || '/'
    navigate(redierect_uri);

  } 

    


    return (
      <Grid sx={{mt: '40px'}}>
      <Paper elevation={10} style={{padding: '20px', height: '60vh', width: '300px', margin: 'auto', border: '1px solid #614051'}}>
          <Grid align="center">
         <h1 style={{fontFamily:'"Playfair Display",serif', marginBottom: '25px', marginTop: '20px', color: '#303030'}}>Add A Product</h1></Grid>
         <form onSubmit={handleSubmit(onSubmit)}>
         <input {...register("img")} placeholder="Img Url" style={{width: '100%', marginBottom: '3px', border: '1px solid #909195', borderRadius: '5px'}}/> <br />

         <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" style={{width: '100%', marginBottom: '3px', border: '1px solid #909195', borderRadius: '5px'}}/> <br />
        
         <input type="number" {...register("price")} placeholder="Price" style={{width: '100%', marginBottom: '3px', border: '1px solid #909195', borderRadius: '5px'}}/> <br />
      
         <textarea {...register("des")} placeholder="Description" style={{width: '100%', marginBottom: '3px', border: '1px solid #909195', borderRadius: '5px'}}/> <br />
         <Button type='submit' variant='contained' sx={{backgroundColor: '#614051'}} >Add Tour </Button>
         </form>
     </Paper>
     </Grid>
    );
};

export default Addproducts;
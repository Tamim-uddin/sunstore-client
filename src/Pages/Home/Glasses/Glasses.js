import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import women from '../../../Image/manglass/women.jpg';
import man from '../../../Image/manglass/man.jpg';
import './Glasses.css';
const Glasses = () => {
    <meta name='viewport' content='width=device-width,initial-scale-1.0' />
    return (
        
        <Box className='responsive' sx={{ mt: 20, p:'20px'}}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
                
            <Typography className='sunglasses' sx={{mt: 10, fontFamily: 'Lucida Handwriting'}} variant="h2" gutterBottom component="div">
            <span style={{color: '#614051'}}>WOM</span>EN'S SU<span style={{color: '#614051'}}>N</span>GLA<span style={{color: '#614051'}}>SS</span>ES <br />
                <Button sx={{fontWeight: 400, fontSize: 15, color: '#231F23'}}  variant="text">Shop Now</Button>
            </Typography>
            
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <Grid container spacing={0.2}>
                    <Grid item xs={6} sm={6} md={6}>
                    <img style={{width: '100%', height: '214.5px'}} src='https://cdn.pixabay.com/photo/2018/03/09/17/46/fashion-3212158_960_720.jpg' alt="" />
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                    <img style={{width: '100%', height: '214.5px'}} src='https://cdn.pixabay.com/photo/2015/03/13/10/09/woman-671487_960_720.jpg' alt="" />
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                    <img style={{width: '100%', height: '214.5px'}} src='https://cdn.pixabay.com/photo/2017/08/06/06/41/girl-2589554_960_720.jpg' alt="" />
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                    <img style={{width: '100%', height: '214.5px'}} src='https://cdn.pixabay.com/photo/2017/09/01/21/53/blue-2705642_960_720.jpg' alt="" />
                    </Grid>
                </Grid>   
            </Grid>


            <Grid item xs={12} sm={6} md={6}>
                <Grid container spacing={0.1}>
                    <Grid item xs={6} sm={6} md={6}>
                        <img style={{width: '100%', height: '214.5px'}} src={man} alt=""/>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                        <img style={{width: '100%', height: '214.5px'}} src='https://cdn.pixabay.com/photo/2019/04/17/17/06/man-4134779_960_720.jpg' alt=""/>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                        <img style={{width: '100%', height: '214.5px'}} src='https://cdn.pixabay.com/photo/2018/10/29/21/46/man-3782190_960_720.jpg' alt=""/>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                        <img style={{width: '100%', height: '214.5px'}} src='https://cdn.pixabay.com/photo/2016/11/21/16/11/coat-1846187_960_720.jpg' alt=""/>
                    </Grid>
                </Grid>   
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
            <Typography  className='sunglasses' style={{marginTop: 90, fontFamily: 'Lucida Handwriting'}} variant="h2" gutterBottom component="div">
                M<span style={{color: '#614051'}}>EN'S</span> <br /><span style={{color: '#614051'}}>S</span>UN<span style={{color: '#614051'}}>GLA</span>SSE<span style={{color: '#614051'}}>S</span> <br />
                <Button sx={{fontWeight: 400, fontSize: 15, color: '#231F23'}} variant="text">Shop Now</Button>
            </Typography>
            </Grid>
            </Grid>
        </Box>
       
    
    );
};

export default Glasses;
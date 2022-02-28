import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import women from '../../../Image/manglass/women.jpg';
import man from '../../../Image/manglass/man.jpg';

const Glasses = () => {
    return (
        <Box sx={{backgroundColor: '#ECEFF1', mt: 20}}>
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
            <Typography sx={{mt: 20}} variant="h2" gutterBottom component="div">
                WOMEN'S SUNGLASSES
                <Button sx={{fontWeight: 400, fontSize: 20, color: '#231F23'}}  variant="text">Shop Now</Button>
            </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <img style={{width: '100%'}} src={women} alt="" />
            </Grid>
            <Grid item xs={12} md={6}>
                <img style={{width: '100%'}} src={man} alt=""/>
            </Grid>
            <Grid item xs={12} md={6}>
            <Typography sx={{mt: 15}} variant="h2" gutterBottom component="div">
                MEN'S SUNGLASSES <br />
                <Button sx={{fontWeight: 400, fontSize: 20, color: '#231F23'}} variant="text">Shop Now</Button>
            </Typography>
            </Grid>
            </Grid>
        </Box>
    );
};

export default Glasses;
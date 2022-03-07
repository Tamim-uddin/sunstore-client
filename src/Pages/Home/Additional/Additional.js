import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import add1 from '../../../Image/Additional/add1.jpg';
import add3 from '../../../Image/Additional/add3.jpg';
import './Additional.css';

const Additional = () => {
    <meta name='viewport' content='width=device-width,initial-scale-1.0' />
    return (
        <Box className="main-add">
            <Grid container spacing={2} >
                <Grid item xs={12} md={8} sx={{position: 'relative', display: 'block', float: 'left'}}>
                   <p className='additional'>Underline <br /> your personality <br /> <Button sx={{color: '#1a1a1a',fontSize: '15px', letterSpacing: '1.em', fontWeight: 700, textDecoration: 'underline'}} variant="text">SHOP NOW</Button></p> <br />
                    <img style={{width: '100%'}} src={add1} alt='' />
                </Grid>
                <Grid item xs={6} md={4}>
                <img style={{width: '100%'}} src={add3} alt='' />
                <p className='last-add'>SALE 50% OFF<br /> <Button sx={{color: '#1a1a1a',fontSize: '15px', letterSpacing: '1.em', fontWeight: 700, textDecoration: 'underline'}} variant="text">SHOP NOW</Button></p>
                </Grid>
            </Grid>
            </Box>
    );
};

export default Additional;
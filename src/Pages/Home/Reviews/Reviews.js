import { Translate } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setreviews] = useState([]);
    useEffect( () => {
        fetch('https://stark-gorge-54734.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setreviews( data))
    } , [])
    return (
        <>
              <Typography className='container-mider'  variant="h3" gutterBottom component="div" sx={{ fontFamily: 'Montserrat,sans-serif', color: '#303030', fontWeight: '500', mt: '60px'}}>
            What Client 
            <span style={{color: '#614051', fontWeight: '900', fontFamily: 'Montserrat,sans-serif', fontSize: '50px'}}> Say</span> 
          
            </Typography>
            <Grid container spacing={2}>
                {
                    reviews.map(review => <Review key={review.name} review={review}></Review>)
                }
            </Grid>


        </>
    );
};

export default Reviews;
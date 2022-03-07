import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Review = ({review}) => {
    const {name, email, des} = review;
    return (
        <Grid item xs={12} sm={4} md={4}>
                <Container sx={{ py: 3}}>
                    <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                          {name}
                        </Typography>
                        <Typography sx={{my: 1.5}} variant="body2">
                          {email}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                           {des}
                        </Typography>   
                    </CardContent>                   
                    </Card>
                </Container>
        </Grid>
    );
};

export default Review;
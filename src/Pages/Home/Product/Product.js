import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Card, CardContent, Container, Typography } from '@mui/material';

const Product = ({product}) => {
    const {id, name, des, price, img} = product;
  return (
   
     <Grid item xs={6} md={4}>
     <Container >
                    <Card sx={{ minWidth: 275, p: 2 }}>
                        <CardContent>
                        <img style={{width: '98%', height: '200px'}} src= {img} alt="" />
                        <Typography variant="h5" component="div">
                         {name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          ${price}
                        </Typography>
                        <Typography variant="body2">
                          {des}                        
                        </Typography>
                        </CardContent>
                        <Button variant="contained">Add to Cart</Button>                    
                    </Card>
            </Container>
        </Grid>
    
  );
};

export default Product;
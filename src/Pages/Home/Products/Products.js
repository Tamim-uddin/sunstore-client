import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setproducts] = useState([]);
    useEffect( () => {
        fetch('https://stark-gorge-54734.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setproducts(data))
    } , [])
    return (
        <div>
             <Typography variant="h3" gutterBottom component="div" sx={{ mt: '50px'}}>
                    Special Offers and Promotion
            </Typography>
            <Grid container spacing={2}>
                {
                   products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </Grid>
        </div>
    );
};

export default Products;
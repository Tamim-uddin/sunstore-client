import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setproducts] = useState([]);
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setproducts(data))
    } , [])
    return (
        <div>
             <Typography variant="h3" gutterBottom component="div" sx={{ mt: '50px'}}>
                    Our special Products {products.length}
            </Typography>
            <Grid container spacing={2}>
                {
                   products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </Grid>
        </div>
    );
};

export default Products;
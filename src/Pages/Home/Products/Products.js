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
        <div style={{marginTop: '150px'}}>
              <Typography className='container-mider'  variant="h3" gutterBottom component="div" sx={{textAlign: 'center', fontFamily: 'Montserrat,sans-serif', color: '#303030', fontWeight: '500'}}>
            Special  <span style={{color: '#614051', fontWeight: '900', fontFamily: 'Montserrat,sans-serif', fontSize: '50px'}}> Offers </span>  
            and <br />Promotion
            </Typography>
            <Grid container spacing={1}>
                {
                   products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </Grid>
        </div>
    );
};

export default Products;


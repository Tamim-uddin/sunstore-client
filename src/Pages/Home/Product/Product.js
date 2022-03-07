import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Card, CardContent, Container, Typography } from '@mui/material';
import useAuth from '../../../hook/useAuth';
import BookingModal from '../../Shared/BookingModal/BookingModal';
import { NavLink } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
    const {name, des, price, img} = product;
    const {user} = useAuth();
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);

  return (
   
    <>
          <Grid item xs={12} sm={6} md={4}>
          <div className="container">
            <img src={img} alt="" className="image" />
                <div className="overlay">
                    <div className="text">
                        <h3>{name}</h3>
                        <p style={{ fontSize: '10px'}}>{des}</p>
                        <p>${price}</p>
                        {user?.email ?
                            <button className="glass-btn" onClick={handleBookingOpen}>Add to Cart</button> :                   
                            <NavLink to="/login"><button className="glass-btn" >Add to Cart</button></NavLink>}   
                    </div>
                 </div>
        </div>
        </Grid>
        <BookingModal
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
        product={product}>
        </BookingModal>
        </>
    
  );
};

export default Product;


import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Card, CardContent, Container, Typography } from '@mui/material';
import useAuth from '../../../hook/useAuth';
import BookingModal from '../../Shared/BookingModal/BookingModal';
import { NavLink } from 'react-router-dom';

const Product = ({product}) => {
    const {name, des, price, img} = product;
    const {user} = useAuth();
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);

  return (
   
    <>
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
                        {user?.email ?
                        <Button onClick={handleBookingOpen} variant="contained">Add to Cart</Button> :                   
                        <NavLink to="/login"><Button  variant="contained">Add to Cart</Button></NavLink>}                   
                    </Card>
            </Container>
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
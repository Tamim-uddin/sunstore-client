import { Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Myorder = ({booking,setbookings,bookings}) => {
    const {_id, clientName, email, productName, price} = booking;

    const handleDelete = id => {
        const uri = `https://stark-gorge-54734.herokuapp.com/bookings/${id}`
        fetch(uri, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data=> {
            if(data.deletedCount){
                alert('deleted successfully');
                const remainingbooking = bookings.filter(booking => booking._id !== id);
                setbookings(remainingbooking);
            }

        })
    }
    return (
        
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ minWidth: 250, backgroundColor: '#F5F5F5', my: 2}}>
                        <CardContent>
                            
                            <Typography variant="h5" component="div">
                                {clientName}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {email}
                            </Typography>
                            <Typography variant="body2">
                                {productName}
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                ${price}
                            </Typography>
                        </CardContent>
                        
                            <Button onClick={() => handleDelete(_id)} sx={{backgroundColor: '#614051', color: 'white', mb:2}} size="small">Delete</Button>
                        
                </Card>
            </Grid>
    
    );
};

export default Myorder;
import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import useAuth from '../../../hook/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({openBooking, handleBookingClose, product}) => {
   const {name, price} = product;
   const {user} = useAuth();
   const initialInfo = {clientName: user.displayName, email: user.email}
   const [bookingInfo, setbookingInfo] = useState(initialInfo);

    const handleonBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newbookingInfo = {...bookingInfo};
        newbookingInfo[field] = value;
        console.log(field, value, newbookingInfo);
        setbookingInfo(newbookingInfo);
    }

    const handleonSubmit = e => {
        e.preventDefault();
        const booking = {
            clientName: user.displayName,
            email: user.email,
            productName: name,
            price
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

        handleBookingClose();
    }



    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBooking}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBooking}>
          <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <form onSubmit={handleonSubmit}>
          <TextField 
          sx={{my:2}}
          label="Name"
          defaultValue={user.displayName}
          name="clientName"
          onBlur={handleonBlur}
          variant="standard" />
          <TextField 
          sx={{my:2}}           
          label="Email"
          defaultValue={user.email}
          name="email"
          onBlur={handleonBlur}
          variant="standard" />
          <TextField 
          sx={{my:2}}
          disabled
          label="Price"
          defaultValue={price}
          variant="standard" /> <br />
          <Button type="submit" variant="contained">Send</Button>
          </form>
          </Box>
        </Fade>
      </Modal>
    );
};

export default BookingModal;
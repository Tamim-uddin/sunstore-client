import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Image/banner/banner1.jpg'
import banner2 from '../../../Image/banner/banner2.jpg'
import banner4 from '../../../Image/banner/banner4.jpg'
import './Banner.css';

const Banner = () => {
    return (
        
        <Carousel className='banner'>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Wellcome to Sunstore </h3>
      <p>Always have sunglasses with you. They're great for when you can't be bothered to put make-up on</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Sunglasses are like eye shadow</h3>
      <p>Trouble travels fast. When you're specially designed for crash testing Or wearing wool sunglasses in the afternoon</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner4}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Don't be afraid to show your lightl</h3>
      <p>One product that you can never go wrong with is sunglasses because they are easy to misplace</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        
    );
};

export default Banner;
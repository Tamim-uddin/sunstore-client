import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner14 from '../../../Image/banner/banner14.jpg'
import banner13 from '../../../Image/banner/banner13.jpg'
import banner18 from '../../../Image/banner/banner18.jpg'
import './Banner.css';

const Banner = () => {
  <meta name='viewport' content='width=device-width,initial-scale-1.0' />

    return (

      <div className="banners responsive">
        <Carousel className='banner'>
  <Carousel.Item>
    <img
      className='img-fluid'
      src={banner14}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3  style={{fontFamily: 'Segoe Print'}}>Wellcome to Sunstore </h3>
      <p>Always have sunglasses with you. They're great for when you can't be bothered to put make-up on</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className='img-fluid'
      src={banner13}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3  style={{fontFamily: 'Segoe Print'}}>Sunglasses are like eye shadow</h3>
      <p>Trouble travels fast. When you're specially designed for crash testing Or wearing wool sunglasses in the afternoon</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className='img-fluid'
      src={banner18}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3  style={{fontFamily: 'Segoe Print'}}>show your lightl</h3>
      <p>One product that you can never go wrong with is sunglasses because they are easy to misplace</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
        
    );
};

export default Banner;
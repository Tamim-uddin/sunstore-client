import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Glasses from '../Glasses/Glasses';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import bg from '../../../Image/Background/bg3.png';
import Additional from '../Additional/Additional';

const Home = () => {
    const homebg = {
        background: `url(${bg})`
    }
    return (
        <div style={homebg}>
            <Navigation></Navigation>
            <Banner></Banner>
            <Additional></Additional>
            <Products></Products>
            <Glasses></Glasses>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;
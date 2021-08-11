import React from 'react';
import DisplayHome from '../components/DisplayHome';
import Features from '../components/Features';
import Footer from '../components/Footer';
const Home = () => {
    return ( 
        <div className="home">
            <DisplayHome/>
            <Features/>
            <Footer/>
        </div>
     );
}
 
export default Home;
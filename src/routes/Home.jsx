import React, { Fragment } from 'react';
import DisplayHome from '../components/DisplayHome';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TopPicks from '../components/TopPicks';
import topPicks from '../context/topPicks';
const Home = () => {
    return ( 
        <Fragment>
            <Header/>
            <div className="home">
                <DisplayHome/>
                <Features/>
                <TopPicks top3 = {topPicks} />
            </div>
            <Footer/>
        </Fragment>
     );
}
 
export default Home;
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import aboutBg from '../images/about_bg.png'
import team from '../images/colleagues-working-together.jpg';
import hari from '../images/OurTeam/hari.jpeg';
import pavan from '../images/OurTeam/pavan.jpeg';
import sai from '../images/OurTeam/sai.jpeg';
const About = () => {
    return ( 
        <div className="about-page">
            <Header/>    
            <div className="about">
                <img src={aboutBg} alt="bg image" />
                <div className="about-content">
                    <div className="svg-img">
                        <img src={team} alt="team of people" />
                        <p><b> Technical Details</b>: This website is build using PERN stack. We used Postgresql for our database, Express.js for the server, React.js for the frontend, Node.js for the backend, and other necessary node modules are also used. </p>
                    </div>
                    <div className="about-description">
                        <h2>About the Page</h2>
                        <hr />
                        <p>We are a team of three members and the theme of our project is <b>Digital Library</b> , where we can read books online. We build a basic authentication page for users to log in and sign up.  Along with that, we decided to add features like adding a book to your personal collections so that we can read them later. One more feature is that users can give reviews and ratings to the books that they have read which will help other users to find a good book. This website has a profile section where users can select an available avatar of their choice, update their details, delete the reviews that they have written.</p> 
                    </div>
                </div>
                <div className="our-team">
                    <h1>Our Team</h1>
                    <div className="members">
                        <div className="member edge">
                            <img src={pavan} alt="pavan" />
                            <p>Pavan Kumar</p>
                        </div>
                        <div className="member">
                            <img src={sai} alt="sai" />
                            <p>Sai Kumar</p>
                        </div>
                        <div className="member edge">
                            <img src={hari} alt="hari" />
                            <p>Hari Kiran</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
     );
}
 
export default About;
import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

const Home = () => {
	return (
		<div className='home'>
			<NavBar />
            <div className="home-body">
                <div className='container col-xxl-8 px-4 py-5'>
                    <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
                        <div className='col-10 col-sm-8 col-lg-6'>
                            <img
                                src='images/Mockup.png'
                                className='d-block mx-lg-auto img-fluid'
                                alt='Bootstrap Themes'
                                width='1000'
                                loading='lazy'
                            />
                        </div>
                        <div className='col-lg-6'>
                            <h1 className='display-5 fw-bold lh-1 mb-3 title'>
                                Find your gaming match with GTG
                            </h1>
                            <p className='lead desc'>
                            Get This Game (GTG) is a user-friendly web app that recommends 
                            new games based on your selected categories. With its advanced 
                            algorithm, GTG suggests games tailored to your interests, including 
                            game information, user ratings, and links to purchase or play online. 
                            Whether you're after a challenge or some fun with friends, GTG can help 
                            you find the perfect game to play. So why wait? Get This Game today!
                            </p>
                            <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
                                <button type='button' className='demo-button'>
                                    TRY DEMO
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
		</div>
	);
};

export default Home;

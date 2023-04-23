import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

type Props = {};

const Home = (props: Props) => {
  return <div>
    <Navbar/>
        <div className="Home-container flex">
            <div className="landing-word flex-col p-8 m-12">
              <h1 className="my-12 font-Syncopate font-bold text-4xl">PODIFY</h1>
              <p className="mt-20 font-montserrat font-medium text-xl">With Podify, you can find and listen to the world's podcasts for free.</p>
              <Link to="/login"> 
              <button type="button" className="rounded-full font-montserrat font-semibold my-20 bg-quaternary px-6 py-2 border-2 border-black-500">
              Get Started
              </button>
              </Link>
            </div>
            <div className="landing-image">
              <img src={require('../assets/OBJECTS.png')} alt="" className="mr-4" />
            </div>
        </div>

  </div>;
};

export default Home;

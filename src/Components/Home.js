import React from "react";
import BannerImage from "../Assets/236885041_105314751863671_7371466624401321506_n.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import {useNavigate, Link} from 'react-router-dom';

export const Home = () => {
  let navigate = useNavigate();

  return (
    
    <div className="home-container">
      <div className="home-alert">
      Same Day Delivery for ALL Products! Free shipping on orders above P300 | Use Code J&JTHEBEST to get P100 for your first order!
      </div>
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          More Protein Better Taste
          </h1>
          <p className="primary-text">
          Healthy Ingredient for Better Dogs
          </p>
          <Link to="/shoppingpage">
          <button className="secondary-button" onclick={() => {navigate("/shoppingpage")}}>
            DISCOVER OUR BESTSELLERS <FiArrowRight />{" "}
          </button>
          </Link>
          
          
        </div>
       
        
      </div>
    </div>
  );
};


export default Home;
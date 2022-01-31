import {React} from "react";
import Footer from "../../components/Footer";

import "./style.css";

import hero from "../../img/hero.png";
import search from "../../img/search.jpg";
import gothrough from "../../img/gothrough.jpg";
import prepare from "../../img/prepare.jpg";
import nailitdown from "../../img/nailitdown.jpg";

import tcs from "../../img/company/tcs.png";
import zoho from "../../img/company/zoho.png";
import wipro from "../../img/company/wipro.png";
import softsquare from "../../img/company/softsquare.png";
import mobius from "../../img/company/mobius.png";
import vcidex from "../../img/company/vcidex.png";
import jilaba from "../../img/company/jilaba.png";
import avasoft from "../../img/company/avasoft.png";
import chainsys from "../../img/company/chainsys.png";
import zuci from "../../img/company/zuci.png";
import centizen from "../../img/company/centizen.png";
import ami from "../../img/company/ami.png";
import smackcoders from "../../img/company/smackcoders.png";
import datalogic from "../../img/company/datalogic.png";
import gigamon from "../../img/company/gigamon.png";


function Home() {

return ( <>
        <div className="hero_container">
           <div className="hero_text">
              <h1> Find the company that suits You </h1>
              <p>Make use of the interview process and reviews<br/>
                to get placed in the company.</p>
              <div className="hero_button">
                 <a href="/signin">
                 <input type="button" name="signin" value="Sign in" className="hero_button1" />
                 </a>
                 <a href="/companies">
                 <input type="button" name="companies" value="Companies" className="hero_button2" />
                 </a>
              </div>
           </div>
           <div className="hero_img">
              <img src={hero} alt="hero" />
           </div>
        </div>
        <section className="section_container">
                <h2 className="section_title">How it Works? </h2>
                <div className="how_itworks_container">
                    <div className="how_itworks-card">
                       <img  className="how_itworks-img" src={search}/>
                       <p className="how_itworks-text-bold">1.Search</p>
                       <p className="how_itworks-text">
                       Search for the company you looking for.</p>
                    </div>
                     <div className="how_itworks-card">
                       <img  className="how_itworks-img" src={gothrough}/>
                       <p className="how_itworks-text-bold">2.Go through </p>
                       <p className="how_itworks-text">
                       Go through the interview process and reviews
                        about the company.
                       </p>
                    </div>
                     <div className="how_itworks-card">
                       <img  className="how_itworks-img" src={prepare}/>
                        <p className="how_itworks-text-bold">3.Prepare </p>
                       <p className="how_itworks-text">
                       Prepare for the interview based on the interview process.</p>
                    </div>
                     <div className="how_itworks-card">
                        <img  className="how_itworks-img" src={nailitdown}/>
                        <p className="how_itworks-text-bold">4.Nail it down </p>
                        <p className="how_itworks-text">
                        Get placed in your dream company. </p>
                    </div>
                </div>

        </section>
     
        <section className="company_container">
            <div className="company_heading_wrap">
              <h2 className="company_heading">
                Over 15+ companies
              </h2>
              <p className="company_subheading">
                Get information about companies.
                Know about their interview process and prepare for it.</p>
            </div>
            <div className="company_wrapper">
                <div className="company_img">
                  <img src={zoho}/>
                </div>
                <div className="company_img">
                  <img src={tcs}/>
                </div>
                 <div className="company_img">
                  <img src={wipro}/>
                </div>
                <div className="company_img">
                  <img src={softsquare}/>
                </div>
                <div className="company_img">
                  <img src={avasoft}/>
                </div>
                <div className="company_img">
                  <img src={zuci}/>
                </div>
                <div className="company_img">
                  <img src={chainsys}/>
                </div>
                 <div className="company_img">
                  <img src={ami}/>
                </div>
                <div className="company_img">
                  <img src={gigamon}/>
                </div>
                <div className="company_img">
                  <img src={datalogic}/>
                </div>
                <div className="company_img">
                  <img src={mobius}/>
                </div>
                <div className="company_img">
                  <img src={centizen}/>
                </div>
                 <div className="company_img">
                  <img src={vcidex}/>
                </div>
                 <div className="company_img">
                  <img src={jilaba}/>
                 </div>
                 <div className="company_img">
                    <img src={smackcoders}/>
                 </div>
            </div>
        </section>
        <section className="follow_container">  
            <div className="follow_text">
                <h3>Connect With Us</h3>
            </div>
            <div className="follow_icons float_icon">
                <a href="https://t.me/+9_4feGpoutgwMjc1">
                    <i className="fab fa-telegram"></i>
                </a>
            </div>
            <div className="follow_text">
                <h3>Contribute to website</h3>
            </div>
            <div className="follow_icons">
                <a href="https://github.com/programmerraja/Yuki22">
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </section>
        <Footer/>
    </>);
}

export default Home;

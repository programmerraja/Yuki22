import {React} from "react";
import "./style.css";

import Footer from "../../components/Footer";

import hero from "../../img/hero.jpg";

import search from "../../img/search.jpg";
import gothrough from "../../img/gothrough.jpg";
import prepare from "../../img/prepare.jpg";
import nailitdown from "../../img/nailitdown.jpg";



function Home() {

return ( <>
        <div className="hero_container">
           <div className="hero_text">
              <h1> Find the company that suits You </h1>
              <p>Make use of the reviews and interview steps <br/>
                to place the company that you likes</p>
              <div className="hero_button">
                 <a href="/signin">
                 <input type="button" name="signin" value="Sign in" className="hero_button1" />
                 </a>
                 <a href="signup">
                 <input type="button" name="signup" value="Sign up" className="hero_button2" />
                 </a>
              </div>
           </div>
           <div className="hero_img">
              <img src={hero} alt="hero" />
           </div>
        </div>
        <div className="hero_wave">
           
        </div>
        <section className="section_container">
                <h3 className="section_title">How it Works? </h3>
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
                       Go through the review and  
                       interview <br/> process about the company.
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
        <section className="follow_container">  
            <div className="follow_text">
                <h3>Connect With Us</h3>
            </div>
            <div className="follow_icons">
                <a href="https://t.me/+o2u1jURL6YZiNWVl">
                    <i className="fab fa-telegram"></i>
                </a>
            </div>
            <div className="follow_text">
                <h3>Contribute</h3>
            </div>
            <div className="follow_icons">
                <a href="https://github.com/programmerraja/Yuki22">
                    <i style={{color:"black"}} className="fab fa-github"></i>
                </a>
            </div>
        </section>
        <Footer/>
    </>);
}

export default Home;
                        // <i class="fas fa-building"></i>

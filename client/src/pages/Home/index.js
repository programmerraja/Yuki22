import {React} from "react";
import "./style.css";

import Footer from "../../components/Footer";

import hero3 from "../../img/hero3.jpg";
import image1 from "../../img/image1.svg";
import image2 from "../../img/image2.svg";


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
              <img src="https://img.freepik.com/free-vector/searching-through-curriculum-vitae-papers-workers_52683-43378.jpg" alt="hero" />
           </div>
        </div>
        <div className="hero_wave">
           
        </div>
        <section className="section_container">
                <h3 className="section_title">How it Works? </h3>
                <div className="how_itworks_container">
                    <div className="how_itworks-card">
                       <img  className="how_itworks-img" src="https://image.freepik.com/free-vector/job-hunt-concept-illustration_114360-436.jpg"/>
                       <p className="how_itworks-text-bold">1.Search</p>
                       <p className="how_itworks-text">
                       Search for the company you looking for.</p>
                    </div>
                     <div className="how_itworks-card">
                       <img  className="how_itworks-img" src="https://image.freepik.com/free-vector/students-with-magnifier-reading-stack-e-books-smartphone-education-app_335657-3300.jpg"/>
                       <p className="how_itworks-text-bold">2.Go through </p>
                       <p className="how_itworks-text">
                       Go through the review and  
                       interview <br/> process about the company.
                       </p>
                    </div>
                     <div className="how_itworks-card">
                       <img  className="how_itworks-img" src="https://image.freepik.com/free-vector/illustrated-online-job-interview_52683-44249.jpg"/>
                        <p className="how_itworks-text-bold">3.Prepare </p>
                       <p className="how_itworks-text">
                       Prepare for the interview based on the interview process.</p>
                    </div>
                     <div className="how_itworks-card">
                        <img  className="how_itworks-img" src="https://image.freepik.com/free-vector/team-happy-cartoon-people-taking-first-place_74855-19910.jpg"/>
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
        </section>
        <Footer/>
    </>);
}

export default Home;
                        // <i class="fas fa-building"></i>

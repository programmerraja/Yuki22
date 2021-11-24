import React from "react";
import "./style.css";

// import Footer from "../Footer/Footer";

import hero3 from "../../img/hero3.jpg";
import image1 from "../../img/image1.svg";
import image2 from "../../img/image2.svg";


function Home() {

return ( <>
    <div className="hero_container">
    <div className="hero_text">
    <h3> Find the jobs that suits You </h3>
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#453cc9" fill="#4a5ec9" opacity="1" d="M0,64L80,74.7C160,85,320,107,480,128C640,149,800,171,960,176C1120,181,1280,171,1360,165.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
    </path></svg>
    </div>
    <section className="section_container">
    
    </section>
    </>);
}

export default Home;
import myimage from "../../src/assets/my-image-ozil.jpg"
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
// import '../../src/App.css'
const Hero = ()=>{
  return (
    <>
    <div className="container">
    
    <div className="page">
      <h1>
        Hi, I AM EREMIYE E.<br/>
        OLUWADAMILARE
      </h1>
      <p>
        A Frontend Focused Web Developer,<br/>
         Building The Frontend of Website,<br/>
        And Web Application that leads to the success of the overall product.<br/>
        i'm also a creative engineer who build delightful web experience.<br/>
        i can adivse your company about the web platform, performance,<br/>
        creative user interactions,and usable machine learning.
      </p>
      <section>
      <span><FaWhatsapp /></span>
      <span><FaFacebookSquare /></span>
      <span><BsTwitterX /></span>
      <span><FaLinkedin /></span>
      <span><FaInstagram /></span>
      </section>
    </div> 


<div className="imgdiv">
      <img src={myimage} alt="my-image-ozil.jpg"/>

    </div>



    
    </div>
    </>

  )
}

export default Hero;
import React from "react";
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer () {
 return (
  <footer className="footer">
   <div className="footericon">
    <a href="https://github.com.............." target="blank">
     <FaGithub /> 
     </a>
   <a href="https://linkedin.com.............." target="blank">
     <FaLinkedin  />   
    </a>
    <a href="https://facebook.com.............." target="blank">
     <FaFacebookF   />      
    </a>
    <a href="https://twitter.com.............." target="blank">
     <FaTwitter  />      
    </a>
   </div>
   <div className="footernote">
    <p > 
         Website Built using React by Anuraag Saini @2022
    </p>
   </div>
  </footer>
 );
}

export default Footer;

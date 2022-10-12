import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer () {
 return (
  <footer className="footer">
   <div className="footer-icon-section">
    <a href="https://github.com.............." target="blank">
     <FaGithub 
     style={{
color: "#FFEC1F",
fontSize:"50px"
     }}
     /> </a>
   <a href="https://linkedin.com.............." target="blank">
     <FaLinkedin 
     style={{
color: "#FFEC1F",
fontSize:"50px"
     }}
     />      
    </a>
   </div>
   <div className="footer-text-section">
    <p className="	footer-text">
     Website Built using React by Anuraag Saini @2022
    </p>
   </div>
  </footer>
 );
}

export default Footer;

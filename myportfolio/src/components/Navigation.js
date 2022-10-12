import React from "react";
import resume from '../Assets/resume.docx';
// C:\Users\SAINI\Desktop\MyPortfolio\myportfolio\src\Assets\resume.docx

function NavTabs ({ currentPage, handlePageChange}) {
 return (
  <ul className="nav nav-tabs">
   <li className="nav-items">
    <a href="#about"
    onClick= {() => handlePageChange('About')}
    className={ currentPage === 'About' ? 'nav-link-active' : 'nav-link'}
   >
    about</a>
    </li>

   <li className="nav-items">
    <a href="#Portfolio"
    onClick= {() => handlePageChange('Portfolio')}
    className={ currentPage === 'Portfolio' ? 'nav-link-active' : 'nav-link'}
   >
    Portfolio</a>
    </li>

    <li className="nav-items">
    <a href="#Contact"
    onClick= {() => handlePageChange('Contact')}
    className={ currentPage === 'Contact' ? 'nav-link-active' : 'nav-link'}
   >
    Contact</a>
    </li>

    <li className="nav-items">
    <a href={resume}
    onClick= {() => handlePageChange('resume')}
    className={ currentPage === 'resume' ? 'nav-link-active' : 'nav-link'}
   >
    Resume
    </a>
    </li>
  </ul>
 )
};
export default NavTabs;
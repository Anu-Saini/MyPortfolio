import React from "react";
import Project from "../Project";
import seasideCafe from "../../Assets/images/01_mainpage.jpg";
import CRM from "../../Assets/images/getTags.jpg";
import SocialSite from "../../Assets/images/mainpage.jpg";
import teambuilder from "../../Assets/images/teamhtml.jpg";

const image01 = '/Assets/images/screenshort01.jpg';

const projects = [
 { //project1
  name: 'SeaSide Cafe',
  tech: 'HTML, CSS , MVC, node, express',
  image: seasideCafe,
  alt: 'image for the seaside website',
  link: 'https://github.com/Anu-Saini/seasidecafe.git',
 },
 { //project2
  name: 'Ecommerce Backend',
  tech: 'node.js, express, MySql',
  image: CRM,
  alt: 'image for backend Ecommerce',
  link: 'https://github.com/Anu-Saini/E-commerce.git',
 },
 { //project3
  name: 'CRM-Soical Network',
  tech: 'HTML, CSS, Node.js, express, mySql ',
  image: SocialSite,
  alt: 'image for the Social_networkingr',
  link: 'https://github.com/Anu-Saini/social_network.git'  
 },
 { //project4
  name: 'teamCardBuilder',
  tech: 'HTML, CSS',
  image: teambuilder,
  alt: 'image for the team card Builder',
  link: 'https://github.com/Anu-Saini/team_profile_builder.git'
 }
];

export default function allProjects() {
 return (
  <div class="sheet">
   <div class="portfoliopage">
    <h1>Some of Projects I have worked on</h1>
<br></br>

<p>Click on the name of the project to view the application of the working application 
  or click the GitHub icon to see the relevant resposotory.
 </p>
  </div>
 <div class="portfoliocard">
  {projects.map((project) => (
   <Project
   image={project.image}
   name={project.name}
   tech={project.tech}
   alt={project.alt}
   link={project.link}
     />
  ))};
 </div>
  </div>
 );
}

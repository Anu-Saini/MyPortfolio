import React from "react";
import Project from "../Project";
// import image01 from "/Assets/images/screenshort01.jpg";
// import image2 from "../../assets/images/screenshort01.jpg";
// import image3 from "../../assets/images/screenshort01.jpg";
// import image4 from "../../assets/images/screenshort01.jpg";

const image01 = '/Assets/images/screenshort01.jpg';

const Projects = [
 { //project1
  name: 'Horiseon Code Refactor',
  tech: 'HTML, CSS',
  image: image01,
  alt: 'image for the horison Code Refractor',
  link: 'https://anu_sainigithub.io/horison.........',
  ghlink: 'https://anu_sainigithub.io/horison.........'
 },
 { //project2
  name: 'Horiseon Code Refactor',
  tech: 'HTML, CSS',
  image: image01,
  alt: 'image for the horison Code Refractor',
  link: 'https://anu_sainigithub.io/horison.........',
  ghlink: 'https://anu_sainigithub.io/horison.........'
 },
 { //project3
  name: 'Horiseon Code Refactor',
  tech: 'HTML, CSS',
  image: image01,
  alt: 'image for the horison Code Refractor',
  link: 'https://anu_sainigithub.io/horison.........',
  ghlink: 'https://anu_sainigithub.io/horison.........'
 },
 { //project4
  name: 'Horiseon Code Refactor',
  tech: 'HTML, CSS',
  image: image01,
  alt: 'image for the horison Code Refractor',
  link: 'https://anu_sainigithub.io/horison.........',
  ghlink: 'https://anu_sainigithub.io/horison.........'
 },
 { //project5
  name: 'Horiseon Code Refactor',
  tech: 'HTML, CSS',
  image: image01,
  alt: 'image for the horison Code Refractor',
  link: 'https://anu_sainigithub.io/horison.........',
  ghlink: 'https://anu_sainigithub.io/horison.........'
 }
];

export default function allProjects() {
 return (
  <div class="sheet">
   <div class="portfolio-page">
    <h1>Below are some of the projects that i have worked on</h1>
<br></br>

<p>Click on the name of the prokject to view the deployed applicatio, or a demonstration video
  of the app working. or click the GitHub icon to see the relevant respoitiry.
 </p>
  </div>
 <div class="portfolio-panels">
  {Projects.map((project) => (
   <project
   image={project.image}
   name={project.name}
   tech={project.tech}
   alt={project.alt}
   link={project.link}
   ghlink={project.ghlink}
   />
  ))};
 </div>
  </div>
 );
}

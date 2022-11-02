import React from "react";
import headshot from "../../Assets/images/selfphoto.jpg";
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaNode } from "react-icons/fa";
// C:\Users\SAINI\Desktop\MyPortfolio\myportfolio\src\Assets\images\selfphoto.jpg.jpg
export default function About() {
 return (
 <div class="row">
  <div class="ibox">
< img src={headshot}
alt= "anuraag saini photo"
height="350px" width="350px"
/>
</div>
<h1 class="about-h1">
 Hi, I am <br></br>
 <span class="namebody"> Anuraag Saini</span>
</h1>
<div class="mainbody">
 <p>
  I am originally from India & moved to Australia in 2011. After completing my MBA in year 2000, I had an opportunity
  to work for one of the biggest woven fabric mills in India. I started as a trainee in Production Planning & Controll, but soon stepped up to work on 
  few marketing projects.After gaining over 12 years experience of Front End Marketing & CustomerService both in International and Domestic 
  Market, I had an opportunity to move to Australia. I have recently moved to city of Brisbane <br></br>
 With a change in location and upcomming new opportunities, I thought it is a great time to give my career a new direction & with Monash 
 offering a bootcamp in coding, no time could be better than this one. So, I started learning coding in new techonology and adding new applications to my portfolio.<br></br>
 In couple of months I will graduate from Monash University bootcamp and will be ready to apply my learning and anthusism to help build real world
 application. Currently I am learning full MERN stack and related techonlogies of NoSQL,state. Some of the techonologies that I have already 
 learnt are HTML, CSS, JavaScript, NodeJs, ExpressJs, MySQL, MongoDB, React. I am committed to update this page continiously so, You will definitely 
 find more interesting projects and applications when you visit this page again.
 </p>
</div>
<div class="tech-icons">
 <FaHtml5  /> {''}
 <FaJs  />{''}
 <FaNode  /> {''}
</div>
</div>
);
}
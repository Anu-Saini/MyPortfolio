import React from "react";
import headshot from "../../Assets/images/selfphoto.jpg";
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa";
// C:\Users\SAINI\Desktop\MyPortfolio\myportfolio\src\Assets\images\selfphoto.jpg.jpg
export default function Anout() {
 return (
 <div class="row">
< img src={headshot}
alt= "anuraag saini photo"
height="200px"
/>
<h1 class="about-h1">
 Hi, I am <br></br>
 <span class="name-copy"> Anuraag Saini</span>
</h1>
<div class="body-copy">
 <p>
  I am originally from India and moved to australia in 2011. After completing my Master in Business Administration, I had an opportunity
  to work for 2 biggest woven fabric mills in India. I started as a trainee in Production Planning & Controll, but soon stepped up to work on 
  few marketing projects.After gaining over 12 years experience of front end marketing & customerservice both in international and domestic 
  market, I had an opportunity to move to Australia. I have recently moved to brisbane <br></br>
 With a change in location and upcomming new opportunities, I thaught it is a great time to give my career a new direction and with Monash 
 offering a bootcamp in coding, no time could be better than this one. So, I started learning to code!. I am continiously learning new techonology 
 and adding new applications to my portfolio.<br></br>
In couple of months I will graduate from Monash University bootcamp and will be ready to apply my learning and anthusism to help build real world
 application. Currently I am learning full MERN stack and related techonlogies of NoSQL,state. Some of the techonologies that I have already 
 learnt are HTML, CSS, JavaScript, NodeJs, ExpressJs, MySQL, MongoDB, React. I am committed to update this page continiously so, You will definitely 
 find more interesting projects and applications when you visit this page again.
 </p>
</div>
<div class="tech-icons">
 <FaHtml5
 style={{
  color:'grey',
  fontSize:'30px',
  textAligh:'center',
  margin:'10px',
 }}
 /> {''}
 <FaCss3Alt
 style={{
  color:'grey',
  fontSize:'30px',
  textAligh:'center',
  margin:'10px',
 }}
 /> {''}
 <FaJs
 style={{
  color:'grey',
  fontSize:'30px',
  textAligh:'center',
  margin:'10px',
 }}
 />{''}
 <FaNodeJs
 style={{
  color:'grey',
  fontSize:'30px',
  textAligh:'center',
  margin:'10px',
 }}
 />
</div>
</div>
);
}
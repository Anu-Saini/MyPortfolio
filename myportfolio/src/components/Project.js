import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Project(props) {
  return (
    <div className="container">
      <div className="card">
        <img src={props.image} alt={props.alt} width="100%" class="card-img" />
        <div class="card-body">
          <a href={props.link} target="blank" class="card-header">
            <h2> Project Name : {props.name} </h2>
          </a>
          <div class="cardrow">
            <p class="card-tech"> Technology Used in project:  {props.tech}</p>
            <a href={props.ghlink} target="blank">
              <FaGithub
                style={{
                  color: "white",
                  fontSize: "30px",
                  textAlign: "center",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

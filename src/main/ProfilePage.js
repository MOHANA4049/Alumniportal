import React from "react";
import { useParams } from "react-router-dom";
import { alumniData } from "./AlumniData";
import "./ProfilePage.css";
export default function Profile() {
  const params = useParams();
  const getAlumniDetails = (id) => {
    return alumniData.filter((data) => id === data.id)[0];
  };
  const data = getAlumniDetails(params.id);
  return(
    <div className="main">
      <div className="sub1">
        <img src={data.src} id="gal" alt="" width="300px" height="500px" />
      </div>
      <div className="sub2">
        <h1 align="left">Name: {data.name}</h1>
        <p align="left">
          <b>PhoneNo: </b>
          {data.phone}
        </p>
        <p align="left">
          <b>Location: </b>
          {data.location}
        </p>
        <p align="left">
          <b>Year: </b>
          {data.year}
        </p>
        <p align="left">
          <b>Company: </b>
          {data.company}
        </p>
        <p align="left">
          <b>Email: </b>
          {data.email}
        </p>
        <p align="left">
          <b>Programming language skills: </b>
          {data.skills}
        </p>
        <p align="left">
          <b>Participated hackathons: </b>
          {data.eventsParticipated}
        </p>
        <p align="left">
          <b>Logical building platforms: </b>
          {data.platforms}
        </p>
        <p>
          <b>Achievements: </b>
          {data.achievements}
        </p>
        <p>
          <b>Coding Contest Attended: </b>
          {data.contest}
        </p>
      </div>
    </div>
  );
}
import React from "react";
import { Link } from "react-router-dom";
import "./dept.css";

export default function CSE() {
  const alumni = [
    {
      id: "1",
      src: require("../images/Manoj.jpg"),
      name: "Manoj",
      company: "Facebook",
      ctc: "CTC: 18 LPA",
    },
    {
      id: "2",
      src: require("../images/Shridhar.jpg"),
      name: "Sridhar",
      company: "Amazon",
      ctc: "CTC: 24 LPA",
    },
    {
      id: "3",
      src: require("../images/Selva.png"),
      name: "Selva",
      company: "Google",
      ctc: "CTC: 27 LPA",
    },
    {
      id: "4",
      src: require("../images/Rajesh.jpg"),
      name: "Rajesh",
      company: "Microsoft",
      ctc: "CTC: 15 LPA",
    },
    {
      id: "5",
      src: require("../images/Divya.jpg"),
      name: "Divya",
      company: "Reliance",
      ctc: "CTC: 12 LPA",
    },
    {
      id: "6",
      src: require("../images/saru.jpg"),
      name: "Saru",
      company: "Netflix",
      ctc: "CTC: 22 LPA",
    },
  ];
  return (
    <div className="ab">
      {alumni.map((data) => (
        <div className="card">
          <Link to={"/alumni/cse" + data.id}>
            <img
              id={data.id}
              src={data.src}
              alt=""
              height="350px"
              width="350px"
            />
          </Link>
          <h3 align="center">{data.name}</h3>
          <h3 align="center">{data.company}</h3>
          <h3 align="center">{data.ctc}</h3>
        </div>
      ))}
    </div>
  );
}
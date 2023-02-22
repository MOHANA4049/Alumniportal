import React from "react";
import { Link } from "react-router-dom";
import "./dept.css";

export default function AIDS() {
  const alumni = [
    {
      id: "1",
      src: require("../images/Abinaya.jpg"),
      name: "Abinaya",
      company: "Zoho",
      ctc: "CTC: 22 LPA",
    },
    {
      id: "2",
      src: require("../images/mithuna.jpg"),
      name: "Mithuna",
      company: "Google",
      ctc: "CTC: 15 LPA",
    },
    {
      id: "3",
      src: require("../images/sharmi.jpg"),
      name: "Sharmila",
      company: "Microsoft",
      ctc: "CTC: 13 LPA",
    },
    {
      id: "4",
      src: require("../images/Priya.jpg"),
      name: "Priya",
      company: "Apple",
      ctc: "CTC: 18 LPA",
    },
  ];
  return (
    <div className="ab">
      {alumni.map((data) => (
        <div className="card">
          <Link to={"/alumni/aids" + data.id}>
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
import React from "react";
import { Link } from "react-router-dom";
import "./dept.css";

export default function IT() {
  const alumni = [
    {
      id: "1",
      src: require("../images/Kavipriya.jpg"),
      name: "Kavi Priya",
      company: "Google",
      ctc: "CTC: 12 LPA",
    },
    {
      id: "2",
      src: require("../images/Krishna.jpg"),
      name: "Krishna",
      company: "Microsoft",
      ctc: "CTC: 9 LPA",
    },
    {
      id: "3",
      src: require("../images/Nirmala.jpg"),
      name: "Nirmala",
      company: "Zoho",
      ctc: "CTC: 10 LPA",
    },
    {
      id: "4",
      src: require("../images/Naveen.jpg"),
      name: "Naveen",
      company: "Amazon",
      ctc: "CTC: 8 LPA",
    },
    {
      id: "5",
      src: require("../images/Monisha.jpg"),
      name: "Monisha",
      company: "Wipro",
      ctc: "CTC: 10 LPA",
    },
    {
      id: "6",
      src: require("../images/Abinath.jpg"),
      name: "Abinath",
      company: "Virtusa",
      ctc: "CTC: 15 LPA",
    },
  ];
  return (
    <div className="ab">
      {alumni.map((data) => (
        <div className="card">
          <Link to={"/alumni/it" + data.id}>
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
import React from "react";
import "./DepartmentPage.css";
import "./Departments/dept.css";
import { Link } from "react-router-dom";

export default function DepartmentPage() {
  const department = [
    {
      id: "cse",
      route: "/departments/cse",
      title: "DEPARTMENT OF CSE",
      src: require("./images/cse.jpg"),
    },
    {
      id: "it",
      route: "/departments/it",
      title: "DEPARTMENT OF IT",
      src: require("./images/IT.jpg"),
    },
    {
      id: "aids",
      route: "/departments/aids",
      title: "DEPARTMENT OF AI&DS",
      src: require("./images/aids.jpg"),
    },
  ];
  return (
    <div className="row" align="center">
      <h1 align="center">SELECT WHICH YOU WANT TO REFER</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {department.map((data) => (
          <div className="dept">
            <Link to={data.route}>
              <img src={data.src} alt="" height="300px" width="300px" />
              <div>
                <h3>{data.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
      </div>
  );
}
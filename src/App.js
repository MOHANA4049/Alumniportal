import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Homepage from "./main/Homepage";
import About from "./main/about";
import DepartmentPage from "./main/DepartmentPage";
import Profile from "./main/ProfilePage";
import CSE from "./main/Departments/CSE";
import IT from "./main/Departments/IT";
import AIDS from "./main/Departments/AIDS";
const App = () => (
  <Router>
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/departmentpage" element={<DepartmentPage />} />
        <Route path="/departments/cse" element={<CSE />} />
        <Route path="/departments/it" element={<IT />} />
        <Route path="/departments/aids" element={<AIDS />} />
       <Route path="/alumni/:id" element={<Profile/>} />
      </Routes>
    </div>
  </Router>
);
export default App;

import React from "react";
import DashBoardImg from "../../assets/dashboard.png";
import Note_alt from "../../assets/note_alt.png";
import Quiz from "../../assets/quiz.png";
import AdminMeds from "../../assets/admin_meds.png";

const SideBar = () => {
  return (
    <div className="container">
      <div className="dashBoard">
        <img src={DashBoardImg} alt="Dashboad_img" className="icon-dashboard" />
        <p className="text-dashboard">Dashboard</p>
      </div>
      <div className="Assesment">
        <img src={Note_alt} alt="Assesment" className="icon-Assesment" />
        <p className="text-Assesment">Assesment</p>
      </div>
      <div className="Library">
        <img src={Quiz} alt="Library_img" className="icon-Library" />
        <p className="text-Library">My Library</p>
      </div>
      <div>.......................</div>

      <div className="Assesment">
        <img src={AdminMeds} alt="Assesment" className="icon-Assesment" />
        <p className="text-Assesment">Round Assesment</p>
      </div>
    </div>
  );
};

export default SideBar;

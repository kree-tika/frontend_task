import React from "react";
import "./index.css";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <div className="block1">
          <div className="widget1">Widget 1</div>
          <div className="widget4">Widget 4</div>
        </div>
        <div className="block2">
          <div className="widget2">Widget 2</div>
          <div className="widget5">Widget 5</div>
        </div>
        <div className="block3">
          <div className="widget3">Widget 3</div>
          <div className="widget6">Widget 6</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

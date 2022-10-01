import React, { useEffect, useState } from "react";
import Activity from "../Activitiy/Activity";
import "./Body.css";

const Body = () => {


  const [activities, setActivities] = useState([]);

  
  useEffect(() => {
    fetch("activity.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);


  return (

    <div className="main-container">


      <div className="card-container">
        <Activity activities={activities} setActivities={setActivities}></Activity>
      </div>

      <div className="user-container">
        <h1>i am user</h1>
      </div>
    </div>
  );
};

export default Body;

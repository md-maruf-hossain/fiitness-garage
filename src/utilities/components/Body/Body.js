import React, { useEffect, useState } from "react";
import Activity from "../Activitiy/Activity";
import userImage from "../../user.png"
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
        {/* user imager and name and location */}
        <div className="userName">
          <img src={userImage} alt="" />
          <div className="user-name-location">
            <h4>Maruf Hossain</h4>
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
      {/* height weight */}
      <div className="user-measurements">
        <span>
          <h4>65kg</h4>
          <p>Weight</p>
        </span>
        <span>
          <h4>5'8"</h4>
          <p>Height</p>
        </span>
        <span>
          <h4>22yrs</h4>
          <p>Age</p>
        </span>
      </div>
      {/* height weight end */}
      {/* add a break */}
      <div className="break-container">
        <h3>Add a break</h3>
        <button className="break-btn">10s</button>
        <button className="break-btn">20s</button>
        <button className="break-btn">30s</button>
        <button className="break-btn">40s</button>
        <button className="break-btn">50s</button>
      </div>
      {/* add a break end */}

      {/* excercise details */}
      <div className="activity-detail">
        <div>
          <h4>Exercise time: 0 seconds</h4>
        </div>

        <div>
          <h4>Break time: 0 seconds</h4>
        </div>
      </div>
      {/* excercise details */}
      <button className="activity-completed">Activity Completed</button>
      </div>
    </div>
  );
};

export default Body;

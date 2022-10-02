import React, { useEffect, useState } from "react";
import Activity from "../Activitiy/Activity";
import userImage from "../../user.png";
import "./Body.css";
import Swal from "sweetalert2";

const Body = () => {
  const [activities, setActivities] = useState([]);
  const [activityTime, setActivityTime] = useState([]);
  // console.log(activityTime)

  useEffect(() => {
    fetch("activity.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  const btnToast = () => {
    Swal.fire("Good job!", "Activity completed successfully.", "success");
  };


  const [value, setValue] = useState([0]);
  const btnHandler = (e) =>{


    const previousBreak = localStorage.getItem("breakValue");
    const previousBreakValue = JSON.parse(previousBreak);

    if(previousBreakValue){
      localStorage.setItem("breakValue", JSON.stringify([...previousBreakValue, e.target.innerText]))
    }else{
      localStorage.setItem("breakValue", JSON.stringify([e.target.innerText]))
    }
    setValue(e.target.innerText);
  }

  const filteredTime = activityTime.filter(tm =>{
    return tm.time;
  })

  const newTime = filteredTime.reduce((previous, current)=>{
    return previous + current.time;
  }, 0)



  return (
    <div className="main-container">
      <div className="card-container">
        <Activity activities={activities} setActivities={setActivities} activityTime={activityTime} setActivityTime={setActivityTime}></Activity>
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
          <button onClick={(e) => btnHandler(e)} className="break-btn">10</button>
          <button onClick={(e) => btnHandler(e)} className="break-btn">20</button>
          <button onClick={(e) => btnHandler(e)} className="break-btn">30</button>
          <button onClick={(e) => btnHandler(e)} className="break-btn">40</button>
          <button onClick={(e) => btnHandler(e)} className="break-btn">50</button>
        </div>
        {/* add a break end */}

        {/* excercise details */}
        <div className="activity-detail">
          <div>
            <h4>Exercise {newTime} time seconds</h4>
          </div>

          <div>
            <h4>Break time: {value} seconds</h4>
          </div>
        </div>
        {/* excercise details */}
        <button onClick={btnToast} className="activity-completed">
          Activity Completed
        </button>
      </div>
    </div>
  );
};

export default Body;

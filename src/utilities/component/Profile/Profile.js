import React from "react";
import "./Profile.css";
import img from "../../user.png";
import Time from "../ExerciseTime/Time";
const Profile = () => {
  return (
    <div>
    {/* user photo */}
      <div className="profile-div">
        <img src={img} alt="" />
        <h4>Maruf Hossain</h4>
        <p>
          <small>Dhaka, Bangladesh</small>
        </p>
      </div>
    {/* details */}
        <div className="user-detail">
            <span>
                <h4>Height: 5'8"</h4>
            </span>
            <span>
                <h4>Weight: 60kg</h4>
            </span>
            <span>
                <h4>Age: 22yrs</h4>
            </span>
        </div>
    {/* add a break */}
        <div className="break">
            <h3>Add a break</h3>
            <button className="break-btn">10s</button>
            <button className="break-btn">20s</button>
            <button className="break-btn">30s</button>
            <button className="break-btn">40s</button>
            <button className="break-btn">50s</button>
        </div>
        <Time></Time>
        <button className="activity-completed-btn">Activity Completed</button>
    </div>
  );
};

export default Profile;

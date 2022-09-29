import React, { useEffect, useState } from "react";
import Profile from "../Profile/Profile";
import Workout from "../Workout/Workout";
import "./Body.css";

const Body = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch("workout.json")
      .then((res) => res.json())
      .then((data) => setWorkouts(data));
    }, 
    []);

  return (
    <div className="body-div">
      {/* part-01 */}
      <div>
      <h2>Select today's exercise</h2>
        <div className="workout-container">
            {
                workouts.map(workout => <Workout 
                    key={workout.id}
                    workout = {workout}
                ></Workout>)
            }
        </div>
      </div>

      {/* part-02 */}
      <div className="profile-div">
        <Profile></Profile>
      </div>
    </div>
  );
};

export default Body;

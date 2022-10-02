import React from 'react';
import './ActivitySingle.css'


const ActivitySingle = ({activities, activityTime, setActivityTime}) => {

    const {name, description, age, img, time} = activities;


    const handleAddToTime = () =>{
        const details = {
            name, description, age, img, time
        }

        setActivityTime([details]);
    }

    return (
        <div>
            <div className="activity-details">
                <img src={img} alt="" />
                <div className="text-container">
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <p><small>For Age: {age}</small></p>
                    <p><small>Time duration: {time}</small></p>
                </div>
                <button onClick={handleAddToTime} className="list-added">
                    <p>Add to list</p>
                </button>
            </div>
        </div>
    );
};

export default ActivitySingle;
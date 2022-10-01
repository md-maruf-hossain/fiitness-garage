import React from 'react';
import './ActivitySingle.css'

const ActivitySingle = ({activities}) => {
    const {name, description, age, img, time} = activities;

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
            </div>
        </div>
    );
};

export default ActivitySingle;
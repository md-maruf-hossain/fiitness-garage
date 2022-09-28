import React from 'react';
import "./Workout.css"

const Workout = ({workout}) => {
    const {img, name, description, age, time} = workout
    return (
        <div className='workout-div'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <h5>For Age: {age}</h5>
            <h4><small>Time required: {time}m</small></h4>
            <button className='add-list-btn'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Workout;
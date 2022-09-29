import React from 'react';
import "./Time.css"
const Time = () => {
    return (
        <div className='time-div'>
            <h3>Exercise Details</h3>
            <div className='exercise-time'>
                <span>
                    <h4>Exercise time</h4>
                    <p>0 seconds</p>
                </span>

                <span>
                    <h4>Break time</h4>
                    <p>0 seconds</p>
                </span>
            </div>
        </div>
    );
};

export default Time;
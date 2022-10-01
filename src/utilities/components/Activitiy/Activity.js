import React from 'react';
import ActivitySingle from '../ActivitySingle/ActivitySingle';
import './Activity.css'
const Activity = ({activities}) => {

    return (
        <div className='activity-container'>
            {
                activities.map((activity) =>(
                    <ActivitySingle
                    activities = {activity}
                    key={activity.id}
                    
                    ></ActivitySingle>
                ))
            }
        </div>
    );
};

export default Activity;
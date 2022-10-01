import React from 'react';
import ActivitySingle from '../ActivitySingle/ActivitySingle';
import './Activity.css'
const Activity = ({activities, activityTime, setActivityTime}) => {

    return (
        <div className='activity-container'>
            {
                activities.map((activity) =>(
                    <ActivitySingle
                    key={activity.id}
                    activities = {activity}
                    activityTime ={activityTime}
                    setActivityTime ={setActivityTime}
                    ></ActivitySingle>
                ))
            }
        </div>
    );
};

export default Activity;
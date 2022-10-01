import React, { useEffect, useState } from 'react';
import './Body.css'

const Body = () => {
    const [activities, setActivities] = useState([])
    useEffect(() =>{
        fetch('activity.json')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
    return (



        <div className='main-container'>
            <div className='card-container'>
                <h1>i am card</h1>
            </div>

            <div className='user-container'>
                <h1>i am user</h1>
            </div>
        </div>
    );
};

export default Body;
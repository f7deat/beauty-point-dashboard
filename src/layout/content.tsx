import React from 'react';
import HourPanel from '../components/hour';
import TaskBar from '../components/tasks/taskBar';

function Content() {
    return (
        <div className="mt-4">
            <HourPanel/>
            <div className="mt-4">
                <TaskBar/>
            </div>
        </div>
    )
}

export default Content

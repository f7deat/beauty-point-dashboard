import React from 'react';
import HourPanel from '../components/hour';
import TaskBar from '../components/tasks/taskBar';

function Content() {
    return (
        <div className="mt-4">
            <div className="row">
                <div className="col-2">

                </div>
                <div className="col-10">
                    <div className="now">
                        <div className="now-border"></div>
                        <span style={{ backgroundColor: "#F05252", color: "#fff", borderRadius: 8, padding: '2px 5px', fontSize: "small", left: '49%', position: 'fixed' }}>
                            {new Date().getHours() + ":" + new Date().getMinutes()}
                        </span>
                    </div>
                </div>
            </div>
            <HourPanel />
            <div className="mt-4">
                <TaskBar />
            </div>
        </div>
    )
}

export default Content

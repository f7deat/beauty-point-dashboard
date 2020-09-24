import React, { useState } from 'react';
import TaskDialog from './taskDiaglog';
import '../../style/taskBar.scss';


export default function TaskBar() {
    const [show, setShow] = useState(false);
    return (
        <div className="h-100">
            <TaskDialog isShow={show} setShow={setShow}/>
            <div className="row">
                <div className="col-md-2">
                    <div className="tap-task shadow-sm" onClick={() => { setShow(true) }}>

                    </div>
                </div>
                <div className="col-md-2">
                    <div className="tap-task shadow-sm" onClick={() => { setShow(true) }}>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="tap-task shadow-sm" onClick={() => { setShow(true) }}>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="tap-task shadow-sm" onClick={() => { setShow(true) }}>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="tap-task shadow-sm" onClick={() => { setShow(true) }}>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="tap-task shadow-sm" onClick={() => { setShow(true) }}>
                    </div>
                </div>
            </div>
        </div>
    )

}
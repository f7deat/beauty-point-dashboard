import React, { useState } from 'react';
import TaskDialog from './taskDiaglog';
import '../../style/taskBar.scss';
import Employee from '../../interfaces/employee';
import EmployeeCard from '../employeeCard';

export default function TaskBar() {
    const [show, setShow] = useState(false);

    const employees: Employee[] = [{
        id: 1,
        name: "John Doe",
        avatar: "http://placehold.jp/071829/ffffff/50x50.png?text=Avatar",
        role: "Specialist"
    }, {
        id: 2,
        name: "TanDC",
        avatar: "http://placehold.jp/071829/ffffff/50x50.png?text=Avatar",
        role: "Manager"
    }, {
        id: 3,
        name: "HungNV",
        avatar: "http://placehold.jp/071829/ffffff/50x50.png?text=Avatar",
        role: "Specialist"
    }, {
        id: 4,
        name: "LinhLP",
        avatar: "http://placehold.jp/071829/ffffff/50x50.png?text=Avatar",
        role: "Specialist"
    }]

    return (
        <div className="h-100">
            <TaskDialog isShow={show} setShow={setShow} />
            {
                employees.map(x => {
                    return (

                        <div className="row mb-4" key={x.id}>
                            <div className="col-md-2">
                                <EmployeeCard employee={x} />
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
                    )
                })
            }
        </div>
    )

}
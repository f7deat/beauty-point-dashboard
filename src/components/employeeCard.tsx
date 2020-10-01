import React from 'react';
import Employee from '../interfaces/employee';

interface PropTypes {
    employee: Employee
}

function EmployeeCard(props: PropTypes) {
    return (
        <div className="p-4 bg-white d-flex shadow-sm mb-4 rounded employee" key={props.employee.id}>
            <div className="employee-avatar">
                <img src={props.employee.avatar} alt="avatar" className="employee-avatar-image" />
            </div>
            <div className="employee-info ml-3">
                <div className="employee-name font-weight-bold text-truncate">{props.employee.name}</div>
                <div className="text-muted">{props.employee.role}</div>
            </div>
        </div>
    )
}

export default EmployeeCard

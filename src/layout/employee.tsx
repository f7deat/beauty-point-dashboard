import React from 'react';
import EmployeeCard from '../components/employeeCard';

function Employee() {
    return (
        <div className="mt-4">
            <div className="employee-deparment font-weight-bolder mb-4 h5 text-truncate">
                Hairdressing department
            </div>

            <EmployeeCard/>
        </div>
    )
}

export default Employee

import React from 'react';

function EmployeeCard() {
    return (
        <div className="p-4 bg-white d-flex shadow-sm">
            <div className="employee-avatar">
                <img src="http://placehold.jp/071829/ffffff/50x50.png?text=Avatar" alt="avatar" className="employee-avatar-image"/>
            </div>
            <div className="employee-info ml-3">
                <div className="employee-name font-weight-bold text-truncate">
                    Faadi Al Rahman
                </div>
                <div className="text-muted">
                    Specialist
                </div>
            </div>
        </div>
    )
}

export default EmployeeCard

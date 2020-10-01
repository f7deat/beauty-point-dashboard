import React from 'react';
import '../style/location.scss';

function LocationPanel() {
    return (
        <div className="position-relative">
            <div className="location-panel shadow-sm rounded d-flex">
                <div className="flex-grow-1">
                    <i className="fas fa-map-marker-alt mr-3"></i>Chi Nhánh
            </div>
                <i className="fas fa-angle-down mt-1"></i>
            </div>
        </div>
    )
}

export default LocationPanel

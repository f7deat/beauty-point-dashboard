import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
            <a className="navbar-brand col-2" href="#a">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse">
                <div className="flex-grow-1 d-flex">
                    <div className="input-group" style={{ width: 260 }}>
                        <div className="input-group-prepend">
                            <span className="input-group-text search-icon"><i className="fas fa-search"></i></span>
                        </div>
                        <input type="search" placeholder="Nhập từ khóa..." className="searchBar form-control" />
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#a">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#a">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#a" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                        </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#a">Action</a>
                                <a className="dropdown-item" href="#a">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#a">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#a" tabIndex={-1} aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
                <div className="user">Account</div>
            </div>
        </nav>
    );
}

export default Navbar;

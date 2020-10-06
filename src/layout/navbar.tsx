import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
            <a className="navbar-brand col-2" href="#a">Beauty</a>
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
                            <a className="nav-link" href="#a">Workday <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#a">Clients</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#a">Finance</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#a">Goods</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#a">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="#b">
                                <i className="fas fa-ellipsis-h"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="user">
                    <img src="http://placehold.jp/071829/ffffff/30x30.png?text=Avatar" alt="avatar" style={{borderRadius: '50%', cursor: 'pointer'}}/>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

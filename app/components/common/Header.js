import React from 'react';

const Header = () => {
    return (
        <div className="header clearfix">
            <nav>
                <ul className="nav nav-pills pull-xs-right">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </nav>
            <h3 className="text-muted">ToDo</h3>
        </div>
    );
}
export default Header;
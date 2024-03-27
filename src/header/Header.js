import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div id="header">
                <h1>SBAB - Demo</h1>
                <nav id="nav">
                    <ul>
                        <li><Link to="/stops">Stops</Link></li>
                        <li><Link to="/lines">Lines</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;

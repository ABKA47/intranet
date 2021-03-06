import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// CSS 
import TBlogo from '../../../img/turkishbank.png';
import classes from './App.css'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar card navbar-expand-lg navbar-light bg-light m-2">
                <div className="container-fluid">
                    <img src={TBlogo} className={classes.AppLogo } alt="tblogo" />
                    <div className="collapse navbar-collapse ms-3" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/telephonelist">Telephone List</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/tbukblog">TBUK Blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

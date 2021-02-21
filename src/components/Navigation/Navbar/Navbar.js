import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// CSS 
import logo from '../../../logo.svg';
import './App.css'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/notebooklist">Notebook List</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
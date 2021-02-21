import React, { Component } from 'react'

import logo from '../../../logo.svg';
import './App.css'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <img src={logo} className="App-logo" alt="logo" />
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/notebooklist">Notebook List</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div >
        )
    }
}

import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

//Import Components
import Navbar from './components/Navigation/Navbar/Navbar'
import Footer from './components/Navigation/Footer/Footer'
import Home from './components/Home/Home'
import NoteBookTable from './container/NoteBookTable/NoteBookTable'
import Login from './container/Login/Login'

class App extends Component {
  render() {

    

    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/notebooklist" component={NoteBookTable} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App
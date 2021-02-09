import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

//Import Components
import Navbar from './components/Navigation/Navbar/Navbar'
import Footer from './components/Navigation/Footer/Footer'
import NoteBookTable from './container/NoteBookTable/NoteBookTable'
import AnydeskTable from './container/AnydeskTable/AnydeskTable'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/notebooklist" component={NoteBookTable} />
          <Route exact path="/anydesklist" component={AnydeskTable} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App
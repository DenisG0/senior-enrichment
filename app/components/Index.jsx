import React, { Component } from 'react';
import TopBar from './TopBar';
import Planets from './Planets';
import Students from './StudentPage';
import SinglePlanet from './SinglePlanet';
import Mainpage from './Mainpage'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import SingleStudent from './SingleStudent';


export default class Main extends Component {

  constructor(){
    super()
    this.state = {}
  }

  render () {

    return (
      <Router>
      <div>
      <TopBar />
        <Switch>
              <Route exact path = "/" component= {Mainpage} />
              <Route exact path = "/user" component= {Students} />
              <Route exact path = "/campus" component= {Planets} />
              <Route path = "/campus/:campusId" component = {SinglePlanet} />
              <Route path = '/user/:userId' component = {SingleStudent} />
         </Switch>
      </div>
      </Router>
    )

  }
}

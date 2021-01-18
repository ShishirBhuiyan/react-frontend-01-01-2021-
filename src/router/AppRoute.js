import React, { Component, Fragment } from 'react'
import { Route,Switch } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';

export default class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
        </Switch>
      </Fragment>
    )
  }
}

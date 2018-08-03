import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Footer from './Footer';
import Organization from '../Organization';
import Profile from '../Profile';
import Teams from '../Teams';

import * as routes from '../constants/routes';

import './style.css';

const ORGANIZATION_NAME_DEFAULT = 'hacksheffield';

class App extends Component {
  state = {
    organizationName: ORGANIZATION_NAME_DEFAULT,
  };

  onOrganizationSearch = value => {
    this.setState({ organizationName: value });
  };

  render() {
    const { organizationName } = this.state;

    return (
      <Router>
        <div className="App">
          <Navigation
            organizationName={organizationName}
            onOrganizationSearch={this.onOrganizationSearch}
          />

          <div className="App-main">
            <Route
              exact
              path={routes.ORGANIZATION}
              component={() => (
                <div className="App-content_large-header">
                  <Organization organizationName={organizationName} />
                </div>
              )}
            />
            <Route
              exact
              path={routes.PROFILE}
              component={() => (
                <div className="App-content_small-header">
                  <Profile />
                </div>
              )}
            />
            <Route
              exact
              path={routes.TEAMS}
              component={() => (
                <div className="App-content_small-header">
                  <Teams organizationName={organizationName} />
                </div>
              )}
              />
          </div>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

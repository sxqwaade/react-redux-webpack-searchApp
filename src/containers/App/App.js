import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import { Navbar } from 'react-bootstrap';
import Helmet from 'react-helmet';
import config from '../../config';

export default class App extends Component {
  render() {
    const styles = require('./App.scss');
    return (
      <div className={styles.app}>
        <Helmet {...config.app.head}/>
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/">
                <span>{config.app.title}</span>
              </IndexLink>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
// import { Link } from 'react-router';
// import { CounterButton, GithubButton } from 'components';
// import config from '../../config';
import Helmet from 'react-helmet';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    // const logoImage = require('./logo.png');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
          <Tabs defaultActiveKey={1} className={styles.homeNav}>
            <Tab eventKey={1} title="热门">
              Tab 1 content
            </Tab>
            <Tab eventKey={2} title="品牌">
              Tab 2 content
            </Tab>
            <Tab eventKey={3} title="类型">
              Tab 3 content
            </Tab>
          </Tabs>
      </div>
    );
  }
}

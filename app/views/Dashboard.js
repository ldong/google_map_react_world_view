import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MyGoogleMap from './MyGoogleMap';

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div>Dashboard</div>
        <MyGoogleMap />
      </div>
    )
  }
}

ReactDOM.render(<Dashboard />, document.getElementById('main'));

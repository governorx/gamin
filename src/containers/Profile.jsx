import React, { Component } from 'react';
import logo from '../images/logo.svg';

export default class Profile extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/containers/Profile.jsx</code> and save to reload.
          </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Make this Page a Profile.
          </a>
      </header>
    )
  }
}
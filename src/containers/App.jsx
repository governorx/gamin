import React, { Component } from 'react';
import Main from './Main'
import Navpan from '../components/Navpan';
import './App.css';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
Amplify.configure(awsconfig);

class App extends Component {

  /** Constructor of parent component.
   * For now, globally needed variables will be declared in this state.
   * This excludes information dealt with wholly through AWS (Account Detail's + ID)
   */
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
    }
  }

  /**
   * Top level page managment function. 
   * How to add a new page to the app
   * 1. Call change page in setting/event that leads to new destination
   * 2. Add destination with  name to the main page
   * 3. Update impacted locations to reflect change (ex. adding page to navbar, or changing it's Active link on update)
   * @param {string} p Displayed page in main container.
   */
  changePage(p) {
    this.setState({
      page: p,
    })
  }

  render() {
    return (
      <div>
        <AmplifySignOut /> {/**Big orange sign out button, Later will be replaced with logout button using Auth API**/}
        <Main changePage={this.changePage.bind(this)} page={this.state.page} />
        <Navpan changePage={this.changePage.bind(this)} />
      </div>
    );
  }
}

export default withAuthenticator(App, { includeGreetings: false });
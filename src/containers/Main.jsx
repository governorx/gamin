import React, { Component } from 'react';
import Home from './Home'
import Search from './Search'
import Profile from './Profile'

export default class Main extends Component {

    render() {
        /** props is a store of all of he variables and
        functions passed from the parent component */
        switch (this.props.page) {
            case 'home':
                return (
                    <div>
                        <Home />
                    </div>
                )
            case 'search':
                return (
                    <div>
                        <Search />
                    </div>
                )
            case 'profile':
                return (
                    <div>
                        <Profile />
                    </div>
                )
            default:
                return (
                    <div>
                        POP
                        {/** TODO: Add content for a 404 page */}
                    </div>
                )

        }

    }
}


import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

/**
 * Navigation Panel for the app, used in navigation and page selection.
 * TODO: Visual Cleanup. Possibly replace abbreviations with symbols? 
 */
export default class Navpan extends Component {

    toHome() {
        this.props.changePage("home");
    }
    toProfile() {
        this.props.changePage("profile");
    }
    toSearch() {
        this.props.changePage("search");
    }

    render() {
        return (
            <Navbar bg="dark" variant="dark" fixed="bottom" className="justify-content-center">
                <Nav>
                    <Nav.Item>
                        <Nav.Link onClick={this.toHome.bind(this)}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={this.toSearch.bind(this)}>Search</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={this.toProfile.bind(this)}>Prof</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        );
    }
}
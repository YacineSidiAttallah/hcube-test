import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'

class MyNavBar extends Component {
  render() {
    return (
      <Navbar id="navbar" expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home" className="navbar-text">
        Hcube Technical Test - Cours de du bitcoin ! </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Navbar.Text className="navbar-text">
          {this.props.onLineUser}
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MyNavBar;

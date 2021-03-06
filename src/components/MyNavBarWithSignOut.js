import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import {Button} from 'tabler-react';
/*Classe qui gènére le menu de navigation*/
class MyNavBarWithSignOut extends Component {
  render() {
    return (
      <Navbar id="navbar" expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home" className="navbar-text">
        Hcube Technical Test - Cours de du bitcoin ! </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Navbar.Text className="navbar-text"  style={{marginRight: "10px"}}>
          {/*Affichage du nom de l'utilisateut connécté Via les props, sinon affichage du texte: Connectez vous*/}
          {this.props.onLineUser}
          </Navbar.Text>
          <Button color="danger" onClick={this.props.signOut}>
          Sign Out !
          </Button>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MyNavBarWithSignOut;

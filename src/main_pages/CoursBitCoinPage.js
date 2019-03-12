import React, { Component } from 'react';
import {Button, Grid, Header, Table} from 'tabler-react';
import "tabler-react/dist/Tabler.css";
import MonTableauBitCoin from '../components/MonTableauBitCoin'
import MyNavBar from '../components/MyNavBar'


/*Page principale une fois l'utilisateur connécté*/
class CoursBitCoinPage extends Component {

  render() {
    return (
      <div>
        <MyNavBar onLineUser={this.props.currentUser}/>
        <div style={customStyle}>
          <Grid.Row>
              <Grid.Col>
                    <MonTableauBitCoin />
              </Grid.Col>
          </Grid.Row>
          <Grid.Row >
              <Grid.Col>
                    <Button color="danger" onClick={this.props.signOut} >Sign Out !</Button>
              </Grid.Col>
          </Grid.Row>
        </div>
      </div>
    );
  }
}

const customStyle={
  margin:"1% 15%",
  textAlign: "center"
}

export default CoursBitCoinPage;

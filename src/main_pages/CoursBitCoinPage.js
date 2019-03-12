import React, { Component } from 'react';
import {Button, Grid, Header, Table} from 'tabler-react';
import "tabler-react/dist/Tabler.css";
import MonTableauBitCoin from '../components/MonTableauBitCoin'
import MyNavBarWithSignOut from '../components/MyNavBarWithSignOut'


/*Page principale une fois l'utilisateur connécté*/
class CoursBitCoinPage extends Component {

  render() {
    return (
      <div>
        <MyNavBarWithSignOut onLineUser={this.props.currentUser}  signOut={this.props.signOut}/>
        <div style={customStyle}>
          <Grid.Row>
              <Grid.Col>
                    <MonTableauBitCoin />
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

import React, { Component } from 'react';
import GoogleButton from '../components/GoogleButton';
import MyNavBar from '../components/MyNavBar'
import "tabler-react/dist/Tabler.css";
import {Grid} from 'tabler-react';
class SignIn extends Component {

  render() {
    return (
      <div>
        <MyNavBar onLineUser={this.props.currentUser}/>
      <div style={customStyle}>
        <Grid.Row>
          <Grid.Col>
            <h2>Please Sign In !</h2>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col>
            <GoogleButton onClick={this.props.signIn} text="Sign In With Your Google Account !" />
          </Grid.Col>
        </Grid.Row>
        </div>
      </div>
    );
  }
}

const customStyle={
  marginTop:"18%",
  textAlign: "center"
}

export default SignIn;

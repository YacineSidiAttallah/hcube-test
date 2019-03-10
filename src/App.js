import React, { Component } from 'react';
import {auth, google_provider, fb_provider, currentUser} from './server/firebase'
import SignIn from './main_pages/SignIn'
import CoursBitCoinPage from './main_pages/CoursBitCoinPage'



class App extends Component {
  constructor(){
    super()
    this.state={
      isSignedIn:false
    }
  }

  sign_in() {
      auth.signInWithPopup(google_provider).then(result => {
          var token = result.credential.accessToken;
          var user = result.user;
      }).catch(error => {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
      })
  }

  sign_out(){
    auth.signOut()
  }


  componentDidMount = () => {
    auth.onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
    })
  }



  render() {
    return (
      <div className="App">
        {this.state.isSignedIn

          ?<CoursBitCoinPage
           signOut={this.sign_out}
          currentUser={"Bienvenue "+ auth.currentUser.displayName}
          />

          :<SignIn signIn={this.sign_in}
           currentUser="Connectez Vous !"
           />
        }
      </div>
    );
  }

}

export default App;

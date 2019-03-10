import * as firebase from 'firebase';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCMQeyYtmGSHlszyAGDEBYcUldyxuhtkrw",
    authDomain: "hcube-test.firebaseapp.com"
})

export const auth = app.auth()
export const google_provider =  new firebase.auth.GoogleAuthProvider()
export const fb_provider =  new firebase.auth.GoogleAuthProvider()

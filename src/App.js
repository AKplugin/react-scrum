import React, { Component } from 'react';
import Section from './layout/Section';
import firebase from 'firebase';

class App extends Component {

  constructor(){
    super();

    this.db = firebase.initializeApp({
      apiKey: "AIzaSyAZPIarB-HRUBT2VLHROL-g6dXFngKXLUU",
      authDomain: "authentication-8d1c1.firebaseapp.com",
      databaseURL: "https://authentication-8d1c1.firebaseio.com",
      projectId: "authentication-8d1c1",
      storageBucket: "authentication-8d1c1.appspot.com",
      messagingSenderId: "553904681564"
    });
    this.data = this.db.database().ref().child("Arun");
    console.log(this.data)
  }

  render() {
    const { mainStyle } = Styles;
    return (
      <div style={mainStyle}>
        <Section name="To-Do" classTag="to-do" />
        <Section name="In-Development" classTag="in-dev" />
        <Section name="Re-Open" classTag="re-open" />
        <Section name="Dev-Sign" classTag="dev-sign" />
      </div>
    );
  }
}

const Styles = {
  mainStyle: {
    "display": "flex",
    "flexDirection": "row",
    "height": "100%"
  }
}

export default App;

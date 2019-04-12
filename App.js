import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import firebase from "firebase";
import InitializeComponent from './src/components/initialize/initialize';
import { Container } from 'native-base';

var config = {
  apiKey: "AIzaSyDDtDMgCefsB3eJJrrCqpR28Jt1p72SV2c",
  authDomain: "rn-chatting-securly.firebaseapp.com",
  databaseURL: "https://rn-chatting-securly.firebaseio.com",
  projectId: "rn-chatting-securly",
  storageBucket: "rn-chatting-securly.appspot.com",
  messagingSenderId: "84611418572"
};
firebase.initializeApp(config);


export default class App extends Component {
  render() {
    return (
      <Container>
        <InitializeComponent />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

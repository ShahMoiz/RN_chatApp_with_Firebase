import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';
import firebase from "firebase";
import InitializeComponent from './src/components/initialize/initialize';
import { Container, Content, Text } from 'native-base';
import SignInComponent from './src/components/signIn/signIn';

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
        <Content>
          <Text>
            Hello App.js
          </Text>
          <SignInComponent />
        </Content>
      </Container>
    )
  }
}
import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';
import firebase from "firebase";
import InitializeComponent from './src/components/initialize/initialize';
import {
  Text, 
  ListItem, 
  List, 
  Right, 
  Title, 
  Body, 
  Left,
  Container, 
  Header, 
  Content, 
  Footer, 
  FooterTab, 
  Button, 
  Icon,
  SwipeRow,
  View,
  Thumbnail
} from 'native-base';
import SignInComponent from './src/components/signIn/signIn';
import goContactList from './src/screens/contactList/goContactList';
import goAuth from './src/screens/authScreen/authScreen';
import goProfile from './src/screens/profile/goToProfile';

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
  contact = () => {
    goContactList()
  }
  goToAuth = () => {
    goAuth()
}
goToProfile = () => {
  goProfile()
}
  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
      <Container>
        <Header>
          <Left/>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='heart' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>

        <Content scrollEnabled={false}>
          <SwipeRow
            leftOpenValue={75}
            rightOpenValue={-75}
            left={
              <Button success onPress={() => alert('Add')}>
                <Icon active name="archive" />
              </Button>
            }
            body={
              <View style={{marginLeft: 15, flex: 1, flexDirection: 'row'}}>
              <View style={{marginRight: 15 }}>
              <Thumbnail small source={{uri: uri}} />
              </View>
              <View>
                <Text>Abdul Moiz</Text>
                <Text note>Welcome to Secure Firebase Chat App..</Text>
              </View>
              </View>
            }
            right={
              <Button danger onPress={() => alert('Trash')}>
                <Icon active name="trash" />
              </Button>
            }
          />
        </Content>

        <Footer>
          <FooterTab>
            <Button active>
              <Icon active name="chatbubbles" />
            </Button>
            <Button onPress={this.contact}>
              <Icon name="contacts" type="MaterialCommunityIcons" />
            </Button>
            <Button>
              <Icon name="person" onPress={this.goToProfile}/>
            </Button>
            <Button onPress={this.goToAuth}>
              <Icon name="settings" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}
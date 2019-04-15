import React, { Component } from 'react';

import firebase from 'firebase';
// import goAuth from '../../screens/authScreen/authScreen'
import {
    Left,
    Icon,
    Input,
    Item,
    Body,
    Title,
    Subtitle,
    Right, 
    Container, 
    Header, 
    Content, 
    List, 
    ListItem, 
    Text, 
    Button,
    Footer, 
    FooterTab, 

} from 'native-base';
import goHome from '../../screens/homeScreen/homeScreen';
import goAuth from '../../screens/authScreen/authScreen';
export default class ProfileComponent extends Component {
    goHome = () => {
        goHome()
    }
    goToAuth = () => {
        goAuth()
    }
    logOut = () => {
        firebase.auth().signOut().then(() => {
            goAuth()
        })
    }
    render() {
        return(
            <Container>
        <Header>
          <Left />
          <Body>
            <Title>Abdul Moiz</Title>
            <Subtitle>
                <Icon name="star" size={15}/>
                <Icon name="star" size={15}/>
                <Icon name="star" size={15}/>
                <Icon name="star" size={15}/>
                <Icon name="star-half" size={15}/>4.9
            </Subtitle>
          </Body>
          <Right />
        </Header>
        <Content>
          <Button bordered transparent full
            style={{margin: 10}} onPress={this.logOut}
            ><Text>Logout</Text></Button>
        </Content>
        <Footer>
          <FooterTab>
            <Button onPress={this.goHome}>
              <Icon name="chatbubbles" />
            </Button>
            <Button  onPress={this.contact}>
              <Icon  name="contacts" type="MaterialCommunityIcons" />
            </Button>
            <Button active>
              <Icon active name="person" />
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
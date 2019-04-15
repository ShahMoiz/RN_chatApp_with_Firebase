import React, { Component } from 'react';

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
import goProfile from '../../screens/profile/goToProfile';
export default class ContactList extends Component {
    goHome = () => {
        goHome()
    }
    goToAuth = () => {
        goAuth()
    }
    goToProfile = () => {
        goProfile()
    }
    render() {
        return(
            <Container>
        <Header>
          <Left />
          <Body>
            <Title>Contacts</Title>
            <Subtitle>emails</Subtitle>
          </Body>
          <Right />
        </Header>
        <Content>
          <Item>
            <Input placeholder='Enter Email to Add Contact'/>
            <Button transparent>
             <Icon active name='arrow-forward' />
            </Button>
          </Item>
          <List>
            <ListItem itemDivider>
              <Text>A</Text>
            </ListItem>                    
            <ListItem>
              <Text>Abdul Moiz</Text>
            </ListItem>
            <ListItem>
              <Text>Abdul Hadi</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>B</Text>
            </ListItem>  
            <ListItem>
              <Text>Baseer</Text>
            </ListItem>
          </List>
        </Content>
        <Footer>
          <FooterTab>
            <Button onPress={this.goHome}>
              <Icon name="chatbubbles" />
            </Button>
            <Button active onPress={this.contact}>
              <Icon active name="contacts" type="MaterialCommunityIcons" />
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
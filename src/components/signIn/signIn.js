import React, { Component } from 'react';
import { StyleSheet } from  'react-native'
import firebase from 'firebase'

import { Container, Header, Left,Text, Body, Right, Button, Icon, Title, Content,Form, Item, Label, Input  } from 'native-base';
import goHome from '../../screens/homeScreen/homeScreen';
export default class SignInComponent extends Component {
    constructor(props){
        super(props)
            this.state = {
                email: '',
                pass: ''
            }
        
    }
    signIn = () => {
        const email = this.state.email;
        const pass = this.state.pass;
        firebase.auth().signInWithEmailAndPassword(email,pass).then(() => {
            goHome()
        }).catch(err => {
            alert("error name", err.message)
        })
    }
    goToHome = () => {
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                goHome()
            }
        })
    }
    render() {
        return(
            <Container>
        <Header>
          <Left>
            <Button onPress={this.goToHome}>
              <Icon name='arrow-left' type="MaterialCommunityIcons"/>
            </Button>
          </Left>
          <Body>
            <Title>Sign In</Title>
          </Body>
            <Right/>
        </Header>
        <Content contentContainerStyle={styles.container}>
          <Form>
            <Item floatingLabel>
              <Label>Enter your Registerd Email </Label>
              <Input onChangeText={email => this.setState({email})} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input onChangeText={pass => this.setState({pass})} />
            </Item>
            <Button full bordered style={styles.formButton}
                onPress={this.signIn}
                >
            <Text>Login</Text>
          </Button>
          </Form>
        </Content>
      </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center'
    },
    formButton: {
        margin: 10
    }
})
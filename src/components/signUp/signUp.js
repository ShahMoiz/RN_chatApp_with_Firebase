import React, { Component } from 'react';
import firebase from 'firebase'
import { StyleSheet, TouchableOpacity } from  'react-native'
import { Container, Header, Left,Text, Body, Right, Button, Icon, Title, Content,Form, Item, Label, Input  } from 'native-base';
// import console = require('console');
// import console = require('console');

export default class SignUpComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            rePass: ''
        }
    }
    signUp = () => {
        const email = this.state.email;
        const pass = this.state.pass;
        const rePass = this.state.rePass;
        if(pass === rePass) {
        firebase.auth().createUserWithEmailAndPassword(email,pass).catch(err => {
            alert(err.code);
            console.log("Error Code", err.code);
            console.log("Error Name", err.message)
            return;
        })
        
    }
    else {
        alert("pass or repass not same")
    }
    }
    render() {
        return(
            <Container>
        <Header>
          <Left>
            <Button>
              <Icon name='arrow-left' type="MaterialCommunityIcons"/>
            </Button>
          </Left>
          <Body>
            <Title>Sign Up</Title>
          </Body>
            <Right/>
        </Header>
        <Content contentContainerStyle={styles.container}>
          <Form>
            <Item floatingLabel>
              <Label>Register Your email</Label>
              <Input onChangeText={text => this.setState({email: text}) } />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry={true} onChangeText={text => this.setState({pass: text}) }/>
            </Item>
            <Item floatingLabel last>
              <Label>Retype Password</Label>
              <Input secureTextEntry={true} onChangeText={text => this.setState({rePass: text}) }/>
            </Item>
            
          </Form>
          <TouchableOpacity onPress={this.signUp}>
            <Button full bordered style={styles.formButton} onPress={this.signUp}  >
            <Text>Sign Up</Text>
          </Button>
          </TouchableOpacity>
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
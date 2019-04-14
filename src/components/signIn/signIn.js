import React, { Component } from 'react';
import { StyleSheet } from  'react-native'
import firebase from 'firebase'

import { Container, Header, Left,Text, Body, Right, Button, Icon, Title, Content,Form, Item, Label, Input  } from 'native-base';
export default class SignInComponent extends Component {
    constructor(props){
        super(props)
            this.state = {
                phone: 123,
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
            <Title>Sign In</Title>
          </Body>
            <Right/>
        </Header>
        <Content contentContainerStyle={styles.container}>
          <Form>
            <Item floatingLabel>
              <Label>Phone Number </Label>
              <Input onChangeText={num => this.setState({phone: num})} />
            </Item>
            <Text>
                { this.state.phone }
            </Text>
            <Item floatingLabel last>
              <Label>Code</Label>
              <Input />
            </Item>
            <Button full bordered style={styles.formButton}>
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
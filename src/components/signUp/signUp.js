import React, { Component } from 'react';
import { StyleSheet } from  'react-native'

import { Container, Header, Left,Text, Body, Right, Button, Icon, Title, Content,Form, Item, Label, Input  } from 'native-base';
export default class SignUpComponent extends Component {
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
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Button full bordered style={styles.formButton}>
            <Text>Sign Up</Text>
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
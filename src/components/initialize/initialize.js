import React, { Component } from 'react';
import firebase from 'firebase'
import { StyleSheet } from "react-native";
import { Container, Text, Content, Spinner } from 'native-base';
import goHome from '../../screens/homeScreen/homeScreen';
import goAuth from '../../screens/authScreen/authScreen';
// import console = require('console');

// import { goHome, goAuth } from '../../screens/indexScreen'
export default class InitializeComponent extends Component {
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                goHome()
                // goHome()
            }
            else {
                goHome()
                // alert("Hello")
                // goAuth()
            }
        })
    }
    render() {
        return(
            <Container>
                <Content  contentContainerStyle={styles.container}>
                    <Text>Loading...</Text>
                    <Spinner color="red"/>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    }
})
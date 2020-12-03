import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, ActivityIndicator } from 'react-native';
import {styles} from '../App'

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            isLoggingIn: false,
            message: '',
            loggedIn: false,
            verified: false
        };
    }

    verifyUser(response){
        for (let i = 0; i < response.length; i++){
            if(response[i].email === this.state.email && response[i].password === this.state.password) {
                this.setState({verified: true}) // pw match with user's pw
            }
        }
    }

    onLogin(){
        const { navigate } = this.props.navigation;
        this.props.navigation.navigate('Dashboard');
    }

    userLogin = () => {
        this.setState({ isLoggingIn: true, message: '' });
        let proceed = false;
        const url = 'http://192.168.1.237:3000/users';

        fetch(url, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                this.verifyUser(response);
                if (this.state.verified === true) proceed = true;
                else this.setState({ message: 'Wrong password or username' });
            })
            .then(() => {
                console.log(proceed.toString())
                this.setState({ isLoggingIn: false })
                if (proceed) this.onLogin();
            })
            .catch(err => {
                this.setState({ message: err.message });
                this.setState({ isLoggingIn: false })
            });
    }

    clearUsername = () => {
        this.setState({ email: '', message: '' });
    }

    clearPassword = () => {
        this.setState({ password: '', message: '' });
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.logo}>Be-a-helper</Text>
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder='Email...'
                        placeholderTextColor='#003f5c'
                        onChangeText={text => this.setState({email:text})}
                        autoFocus={true}
                        onFocus={this.clearUsername}/>
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder='Password...'
                        placeholderTextColor='#003f5c'
                        onChangeText={text => this.setState({password:text})}
                        onFocus={this.clearPassword}
                        onSubmitEditing={this.userLogin}/>
                </View>

                {!!this.state.message && (
                    <Text
                        style={{fontSize: 14, color: 'red', padding: 5}}>
                        {this.state.message}
                    </Text>
                )}

                <TouchableOpacity>
                    <Text style={styles.prompt}>Forgot Password?</Text>
                </TouchableOpacity>


                {this.state.isLoggingIn && <ActivityIndicator />}
                <TouchableOpacity style={styles.loginBtn} onPress={this.userLogin}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.loginText}
                          disabled={this.state.isLoggingIn||!this.state.username||!this.state.password}
                          onPress={this.userLogin}
                    >Signup</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
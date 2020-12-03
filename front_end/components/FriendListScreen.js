import * as React from 'react';
import {Component} from 'react';
import {ActivityIndicator, Button, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../App';

class FriendListScreen extends Component{
    constructor(props) {
        super(props);

        this.state = {
            users: null
        }
    }

    componentDidMount(){
        const { users } = this.state;
        const url = 'http://192.168.1.237:3000/users'
        return fetch(url, {method: 'GET', mode: 'cors'})
            .then((response) => response.json())
            .then((json) => {
                this.setState({ users: json});
                console.log(users)
            })
            .catch(
                (error) => {
                    console.error(error)
                }
            )
            .finally(() => {
                this.setState({ isLoading: false });
            });
    }

    friendRow(friend){
        return(
            <View style={styles.friendBlock}>
                <TouchableOpacity>
                    <Text style={styles.friendNames}>{friend.name}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    render(){
        const {users, isLoading} = this.state;
        if(isLoading === false) {
            const all = []

            for (let i = 0; i < users.length; i++){
                all.push(this.friendRow(users[i]));
            }
            return(
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '5%'}}>
                    {all}
                </View>
            )
        }
        else{
            return(
                <View style={{ flex: 1 }}>
                    <ActivityIndicator size='large' />
                </View>
            );
        }
    }
}

export default FriendListScreen;
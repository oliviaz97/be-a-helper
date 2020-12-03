import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Component} from 'react';
import FriendActivityScreen from './FriendActivityScreen';

const Stack = createStackNavigator();

class ActivitiesRoot extends Component{
    render(){
        return (
            <Stack.Navigator initialRouteName='Friend Activities'>
                <Stack.Screen name='Friend Activities' component={FriendActivityScreen}/>
            </Stack.Navigator>
        );
    }
}

export default ActivitiesRoot;
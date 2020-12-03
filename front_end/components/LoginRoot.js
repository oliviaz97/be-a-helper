import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Component} from 'react';
import LoginScreen from './LoginScreen';
import DashboardRoot from './DashboardRoot';

const Stack = createStackNavigator();

class LoginRoot extends Component{
    render(){
        return (
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name='Login' component={LoginScreen}/>
                <Stack.Screen name='Dashboard' component={DashboardRoot} />
            </Stack.Navigator>
        );
    }
}

export default LoginRoot;
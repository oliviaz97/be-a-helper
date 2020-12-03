import * as React from 'react';
import WelcomeScreen from './WelcomeScreen';
import LinksScreen from './LinksScreen';
import { createStackNavigator } from '@react-navigation/stack';
import {Component} from 'react';

const Stack = createStackNavigator();

class WelcomeRoot extends Component{
    render(){
        return (
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={WelcomeScreen}/>
                <Stack.Screen name="Links" component={LinksScreen} />
            </Stack.Navigator>
        );
    }
}

export default WelcomeRoot;
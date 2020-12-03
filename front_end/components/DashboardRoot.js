import * as React from 'react';
import DashboardScreen from './DashboardScreen';
import DonationScreen from './DonationScreen';
import { createStackNavigator } from '@react-navigation/stack';
import {Component} from 'react';
import FriendListScreen from './FriendListScreen';
import CausesScreen from './CausesScreen';
import DonationHistoryScreen from './DonationHistoryScreen';
import LinksScreen from "./LinksScreen";

const Stack = createStackNavigator();

class DashboardRoot extends Component{
    render(){
        return (
            <Stack.Navigator initialRouteName='Dashboard'>
                <Stack.Screen name='Dashboard' component={DashboardScreen}/>
                <Stack.Screen name='Donation' component={DonationScreen} />
                <Stack.Screen name='Friends' component={FriendListScreen} />
                <Stack.Screen name='Causes' component={CausesScreen} />
                <Stack.Screen name='Donation History' component={DonationHistoryScreen} />
                <Stack.Screen name='Links' component={LinksScreen} />
            </Stack.Navigator>
        );
    }
}

export default DashboardRoot;
import * as React from 'react';
import CausesScreen from './CausesScreen';
import LinksScreen from './LinksScreen';
import { createStackNavigator } from '@react-navigation/stack';
import {Component} from 'react';

const Stack = createStackNavigator();

class CausesRoot extends Component{
    render(){
        return (
            <Stack.Navigator initialRouteName='Causes'>
                <Stack.Screen name='Causes' component={CausesScreen}/>
                <Stack.Screen name='Links' component={LinksScreen} />
            </Stack.Navigator>
        );
    }
}

export default CausesRoot;
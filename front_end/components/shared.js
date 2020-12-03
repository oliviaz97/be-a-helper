import * as React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, Button, ScrollView } from 'react-native';
import {styles} from '../App';

const MenuButton = (props) => {
    return(
        <View style={styles.menuButtonView}>
            <Button title='Open menu' onPress={() => this.props.navigation.openDrawer()} />
        </View>
    );
}

const TitleEdit = (props) => {
    return(
        <View style={{ height: 30, margin: 20, flexDirection: "row" }}>
            <View style={{ flex: 1, flexDirection: "row" }}>
                <Text style={styles.headerText}>{props.title}</Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: 'flex-end'}}>
                <Button color= '#fb5b5a' title='Edit'/>
            </View>
        </View>
    );
}

export default MenuButton;
export {TitleEdit};
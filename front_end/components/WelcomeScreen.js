import * as React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, Button, ScrollView } from 'react-native';
import {styles} from '../App';
import MenuButton from './shared';

class WelcomeScreen extends Component{
    constructor(props){
        super(props)

        this.state = {
        }
    }
    welcomeText(){
        return(
            <View style={{ height: 70, margin: 20}}>
                <Text style={styles.headerText}>Hello, helper!</Text>
                <Text style={styles.titleText}>Choose causes that interest you the most...</Text>
            </View>
        );
    }

    causeRow (left, right) {
        const { navigate } = this.props.navigation;

        return(
            <View style={{ height: 30, margin: 20, flexDirection: 'row' }}>
                <View style={styles.causeView}>
                    <Button color='#fc8383' style={styles.causeButton} title={left} onPress={() =>
                        navigate('Links', {type: left})} />
                </View>
                <View style={styles.causeView}>
                    {right !== ''? <Button color='#fc8383' style={styles.causeButton} title={right} onPress={() =>navigate('Links', {type: right})} />: null }
                </View>
            </View>
        );
    }
    render(){
        return(
            <ScrollView>
                {this.welcomeText()}
                {this.causeRow('Multi-Purpose','Hunger')}
                {this.causeRow('Medical','Disability')}
                {this.causeRow('Reproductive-Health','Mental-Health')}
                {this.causeRow('LGBTQ','Civil-Rights')}
                {this.causeRow('Education','Children')}
                {this.causeRow('Animals','Environment')}
                {this.causeRow('Disaster-Relief','Human-Rights')}
                {this.causeRow('Homelessness', '')}
                <View style={{alignItems: 'center', justifyContent: 'center', marginVertical: '1%'}}>
                    <Button color= '#fb5b5a' title='Open menu' onPress={() => this.props.navigation.openDrawer()} />
                </View>
            </ScrollView>
        );
    }
}

export default WelcomeScreen;
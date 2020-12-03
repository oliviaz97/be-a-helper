import * as React from 'react'
import {Button, Image, Modal, onChangeText, Text, TouchableHighlight, View} from 'react-native';
import {Avatar} from 'react-native-elements';
import {styles} from '../App'
import {Component} from 'react';

class DashboardScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currUserId: '12345'
        };
    }

    render(){
        const { navigate } = this.props.navigation;

        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', margin: '2%'}}>
                <View style={{ alignItems: 'center', justifyContent: 'center', margin: '2%'}}>
                    <Avatar size='xlarge'
                            title='OZ'
                            overlayContainerStyle={{backgroundColor: 'palevioletred'}}/>
                    <Text style={styles.profileText}>Name: Olivia Z</Text>
                    <Text style={styles.profileText}>Helperid: 12345</Text>
                    <Text style={styles.profileText}>Total Causes: 6</Text>
                    <Text style={styles.profileText}>Total Donations: 3</Text>
                    <Text style={styles.profileText}>Bio: UIUC CS & Linguistics Student</Text>
                </View>

                <View style={styles.causeView}>
                    <Button color= '#fb5b5a' style={styles.button_list_view} title='My Causes' onPress={() => navigate('Causes')} />
                </View>
                <View style={styles.causeView}>
                    <Button color= '#fb5b5a' style={styles.button_list_view} title='Log a donation' onPress={() => navigate('Donation')} />
                </View>
                <View style={styles.causeView}>
                    <Button color= '#fb5b5a' style={styles.button_list_view} title='See donation history' onPress={() => navigate('Donation History')}/>
                </View>
                <View style={styles.causeView}>
                    <Button color= '#fb5b5a' style={styles.button_list_view} title='View friends' onPress={() => navigate('Friends')} />
                </View>
                <View style={styles.causeView}>
                    <Button color= '#fb5b5a' style={styles.button_list_view} title='Open menu' onPress={() => this.props.navigation.openDrawer()} />
                </View>
            </View>
        );
    }
}

export default DashboardScreen;

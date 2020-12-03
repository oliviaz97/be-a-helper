import * as React from 'react'
import {Button, Text, View} from 'react-native';
import {styles} from '../App'
import {Component} from 'react';
import {TextInput} from 'react-native-web';

class DonationScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: null,
            org: null
        }
    }
    saveDonationRecord(){
        //post data to server
    }

    render(){
        const {amount, org} = this.state;
        return (
            <View style={[styles.column, {margin: '15%', backgroundColor: '#ecdfdf'}]}>
                <View style={styles.row}>
                    <Text style={[styles.headerText]}>Log a Donation</Text>
                </View>
                <View style={styles.row}>
                    <Text style={[styles.row, {fontSize: 17, margin: 10}]}>Amount:</Text>
                    <TextInput style={styles.simpleInput}
                               onChangeText={text => this.setState({amount: text})}
                               placeholder='... dollars'
                               value={amount}/>
                </View>
                <View style={styles.row}>
                    <Text style={[styles.row, {fontSize: 17, margin: 10}]}>To:</Text>
                    <TextInput style={styles.simpleInput}
                               onChangeText={text => this.setState({org: text})}
                               placeholder='Organization Name'
                               value={org}/>
                </View>
                <View style={styles.row}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', margin: '5%' }}>
                        <Button color= '#fb5b5a' style={styles.utility_button} title='Save Record' onPress={this.saveDonationRecord} />
                    </View>
                </View>
            </View>

        );
    }
}

export default DonationScreen;

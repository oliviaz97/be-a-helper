import {Button, Text, View} from 'react-native';
import {styles} from '../App';
import {TextInput} from 'react-native-web';
import * as React from 'react';
import {Component} from 'react';

class GoalsScreen extends Component{
    constructor(props) {
        super(props);

        this.state = {
            numberOfDonations: null
        }
    }

    saveDonationGoal(){
        // post data to server
    }

    render(){
        const {numberOfDonations} = this.state;
        return (
            <View style={[styles.column, {margin: '15%', backgroundColor: '#ecdfdf'}]}>
                <View style={styles.row}>
                    <Text style={[styles.headerText]}>Plan a Donation Goal</Text>
                </View>
                <View style={styles.row}>
                    <Text style={{fontSize: 17, margin: 0}}>I plan to make </Text>
                    <TextInput style={[styles.simpleInput, {width: 30}]}
                               onChangeText={text => this.setState({numberOfDonations: text})}
                               placeholder='4'
                               value={numberOfDonations}/>
                    <Text style={{fontSize: 17, margin: 0}}> donations this month.</Text>
                </View>

                <View style={styles.row}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', margin: '5%' }}>
                        <Button color= '#fb5b5a' style={styles.utility_button} title='Save Goal' onPress={this.saveDonationGoal} />
                    </View>
                    <View style={{alignItems: 'center', justifyContent: 'center', marginVertical: '1%'}}>
                        <Button color= '#fb5b5a' title='Open menu' onPress={() => this.props.navigation.openDrawer()} />
                    </View>
                </View>
            </View>

        );
    }
}

export default GoalsScreen;
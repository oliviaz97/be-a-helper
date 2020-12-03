import {Component} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../App';
import * as React from 'react';

class DonationHistoryScreen extends Component{
    constructor(props) {
        super(props);

        this.state = {
            data: null
        }
    }

    componentDidMount(){
        const { data } = this.state;
        const url = 'http://192.168.1.237:3000/users'
        return fetch(url, {method: 'GET', mode: 'cors'})
            .then((response) => response.json())
            .then((json) => {
                this.setState({ data: json[0]});
            })
            .catch(
                (error) => {
                    console.error(error)
                }
            )
            .finally(() => {
                this.setState({ isLoading: false });
            });
    }

    donationRecordRow(record){
        const timestamp = record.timestamp;
        const amount = record.amount;
        const org = record.donateTo;

        return(
            <View style={styles.activityView}>
                <Text style={styles.activityText}>Donated ${amount.toString()} to {org}</Text>
                <Text style={styles.activityText}>Time: {timestamp.toString()}</Text>
            </View>
        );
    }

    render(){
        const {data, isLoading} = this.state;
        if(isLoading === false) {
            const all = []
            console.log(data);
            for (let i = 0; i < data.donationRecords.length; i++){
                all.push(this.donationRecordRow(data.donationRecords[i]));
            }
            return(
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '5%'}}>
                    {all}
                </View>
            )
        }
        else{
            return(
                <View style={{ flex: 1 }}>
                    <ActivityIndicator size='large' />
                </View>
            );
        }
    }
}

export default DonationHistoryScreen;
import * as React from 'react';
import {ActivityIndicator, View, Text, TouchableOpacity, Button} from 'react-native';
import {Component} from 'react';
import {styles} from '../App';

class FriendActivityScreen extends Component{
    constructor(props) {
        super(props);

        this.state = {
            records: null,
            liked: false
        }
    }

    componentDidMount(){
        const { records } = this.state;
        const url = 'http://192.168.1.237:3000/activities'
        return fetch(url, {method: 'GET', mode: 'cors'})
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                this.setState({ records: json});
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

    activityBlock(record, i){
        const {liked} = this.state;
        const name = record.name;
        const timestamp = record.donationRecords.timestamp;
        const amount = record.donationRecords.amount;
        const org = record.donationRecords.donateTo;
        const likes = record.donationRecords.likes;

        return(
            <View style={styles.activityView}>
                <Text style={styles.activityText}>{name} donated ${amount.toString()} to {org}</Text>
                <Text style={styles.activityText}>Time: {timestamp}</Text>
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.activityText}>Likes: {likes}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    render(){
        const {records, isLoading, total} = this.state;
        if(isLoading === false) {
            const all = []
            for (let i = 0; i < records.length; i++){
                all.push(this.activityBlock(records[i]));
            }

            return(
                <View style={{alignItems: 'center', justifyContent: 'center', margin: '1%'}}>
                    <View style={{alignItems: 'left', justifyContent: 'left', marginVertical: '1%'}}>
                        <Button color= '#fb5b5a' title='Open menu' onPress={() => this.props.navigation.openDrawer()} />
                    </View>
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

export default FriendActivityScreen;
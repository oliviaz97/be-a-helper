import * as React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';
import {styles} from '../App';

class CausesScreen extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };
    }

    addCauses(){
    }

    causeRow (title) {
        const {isEditing} = this.state;
        const { navigate } = this.props.navigation;

        if(isEditing === false){
            return(
                <View style={{ height: 30, margin: 20, flexDirection: 'row' }}>
                    <View style={styles.causeView}>
                        <Button color='#fc8383' style={styles.causeButton} title={title} onPress={() =>
                            navigate('Links', {type: title})} />
                    </View>
                </View>
            );
        }
        else{
            return(
                <View style={{ height: 30, margin: 20, flexDirection: 'row' }}>
                    <View style={styles.causeView}>
                        <Button color='#fc8383' style={styles.causeButton} title={title} onPress={() =>
                            navigate('Links', {type: title})} />
                        <View style={{ flexDirection: 'row'}}>
                            <TouchableOpacity style={styles.addButton} onPress={this.addCauses}>
                                <Text style={{ color: 'white', fontSize: 11 }}>add</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.deleteButton}>
                                <Text style={{ color: 'white', fontSize: 11 }}>delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
        }
    }

    render(){
        return(
            <View style={{ }}>
                <View style={{ height: 30, margin: 20, flexDirection: 'row' }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Text style={styles.headerText}>Your Causes</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <Button color='#fb5b5a' title='Edit' onPress={() => this.setState({isEditing: true})}/>
                    </View>
                </View>

                <View style={{ flex: 5}}>
                    {this.causeRow('Hunger')}
                    {this.causeRow('Education')}
                    {this.causeRow('Children')}
                    {this.causeRow('LGBTQ')}
                    {this.causeRow('Environment')}
                    {this.causeRow('Reproductive-Health')}
                </View>
            </View>
        );
    }
}

export default CausesScreen;
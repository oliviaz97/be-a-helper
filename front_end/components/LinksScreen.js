import * as React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, Button, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import {styles} from '../App';
import MenuButton, {TitleEdit} from './shared';
import Linking from 'react-native-web/dist/exports/Linking';

class LinksScreen extends Component{
    constructor(props) {
        super(props);

        this.state = {
            type: props.route.params?.type ?? 'No type specified',
            isLoading: true,
            data: null
        };
    }

    componentDidMount(){
        const { type, data } = this.state;
        const root_url = 'http://192.168.1.237:3000/'
        const url = root_url.concat(type)
        return fetch(url, {method: 'GET', mode: 'cors'})
            .then((response) => response.json())
            .then((json) => {
                this.setState({ data: json[0].links });
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

    linkRow(data){
        return(
            <View style={styles.linkBlock}>
                <TouchableOpacity onPress={() => {Linking.openURL(data.link)}}>
                    <Text>{data.name}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    render(){
        const { type, isLoading, data } = this.state;
        if(this.state.isLoading === false){
            const all = []

            for (let i = 0; i < data.length; i++){
              all.push(this.linkRow(data[i]))
            }

            const { params } = this.props.route;
            if(data === null){
                return(
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 5}}>
                            <Text>
                                No links available.
                            </Text>
                        </View>

                        <View style={[styles.menuButtonView, {flex:1}]}>
                            <Button color= '#fb5b5a' title='Open menu' onPress={() => this.props.navigation.openDrawer()} />
                        </View>
                    </View>
                );
            }
            return(
                <View style={{ flex: 1 }}>
                    <TitleEdit title={this.state.type + ' Charities'}></TitleEdit>
                    <View style={{ flex: 5}}>
                        {all}
                    </View>

                    <View style={[styles.menuButtonView, {flex:1}]}>
                        <Button color= '#fb5b5a' title='Open menu' onPress={() => this.props.navigation.openDrawer()} />
                    </View>
                </View>
            );
        }
        else{  // loading
            return(
                <View style={{ flex: 1 }}>
                    <TitleEdit title={this.state.type + ' Charities'}></TitleEdit>
                    <ActivityIndicator size='large' />
                    <View style={[styles.menuButtonView, {flex:1}]}>
                        <Button color= '#fb5b5a' title='Open menu' onPress={() => this.props.navigation.openDrawer()} />
                    </View>
                </View>
            );
        }

    }
}

export default LinksScreen;
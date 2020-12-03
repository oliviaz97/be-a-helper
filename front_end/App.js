import * as React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeRoot from './components/WelcomeRoot';
import DashboardRoot from "./components/DashboardRoot";
import ActivitiesRoot from "./components/ActivitiesRoot";
import GoalsScreen from "./components/GoalsScreen";
import LoginScreen from "./components/LoginScreen";
import LoginRoot from "./components/LoginRoot";

const Drawer = createDrawerNavigator();

class App extends Component{
  render(){
    return (
        <NavigationContainer>
          <Drawer.Navigator initialRouteName = 'Logout'>
            <Drawer.Screen name='Welcome Page' component={WelcomeRoot} />
            <Drawer.Screen name='Dashboard' component={DashboardRoot} />
            <Drawer.Screen name='Activities' component={ActivitiesRoot} />
            <Drawer.Screen name='Goals' component={GoalsScreen} />
            <Drawer.Screen name='Logout' component={LoginScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold'
  },
  titleText: {
    fontSize: 17,
    textAlign: 'left'
  },
  regularText: {
    fontSize: 15,
    textAlign: 'left'
  },
  causeButton: {
    flex: 3,
    fontSize: 15,
    textAlign: 'center'
  },
  deleteButton: {
    alignItems: 'center',
    backgroundColor: '#cd5c5c',
    padding: 5
  },
  addButton: {
    alignItems: 'center',
    backgroundColor: '#20b2aa',
    padding: 5
  },
  causeView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center',
    margin: 10
  },
  menuButtonView: {
    marginTop: 30,
    justifyContent: 'flex-end'
  },
  linkBlock: {
    height: 5,
    margin: 20,
    justifyContent: 'center',
    textAlign: 'center'
  },
  profileText:{
    fontSize:16,
    textAlign: 'center',
    padding: 5
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView:{
    width:'60%',
    backgroundColor:'#bc8f8f',
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:'center',
    padding:20
  },
  inputText:{
    height:50,
    color:'white'
  },
  prompt:{
    color:'black',
    fontSize:11
  },
  loginBtn:{
    width:'40%',
    backgroundColor:'#fb5b5a',
    borderRadius:25,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    marginTop:40,
    marginBottom:10
  },
  logo:{
    fontWeight:'bold',
    fontSize:50,
    color:'#fb5b5a',
    marginBottom:40
  },
  loginText:{
    fontSize: 15
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10
  },
  utility_button: {
    flex: 2,
    fontSize: 18,
    textAlign: 'center',
    padding: 20
  },
  button_list_view: {
    alignItems: 'center'
  },
  simpleInput:{
    height: 30,
    borderColor: "gray",
    borderWidth: 1
  },
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center'
  },
  column: {
    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center'
  },
  friendBlock: {
    height: 50,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    margin: "1%",
    backgroundColor: "#ecdfdf"
  },
  friendNames: {
    fontSize: 17,
    margin: 10,
    weight: "bold",
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityView: {
    width: 500,
    alignItems: 'center',
    justifyContent: 'center',
    margin: "1%",
    backgroundColor: "#ecdfdf"
  },
  activityText:{
    fontSize: 17,
    margin: 10,
    weight: "bold",
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
export {styles};

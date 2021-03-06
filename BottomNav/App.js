import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
//Material Tab Bar
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
//Platform Specific Icons
import Icon from 'react-native-vector-icons/Ionicons'

//Home Screen
class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to React Native !</Text>
      </View>
    );
  }
}

//Settings Screen
class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings Tabs</Text>
      </View>
    );
  }
}

//Create bottom Tabs
export default createMaterialBottomTabNavigator({
  Home: {
    screen: HomeScreen, //Screen name
    navigationOptions: {
      tabBarLabel: 'Home', // Tab Label
      tabBarIcon: ({ tintColor }) => (
        //Platform specific code for icons
        <Icon name="ios-home" color={tintColor} size={24} />
      )
    }
  },
  Settings: {
    screen: SettingsScreen,//Screen name
    navigationOptions: {
      tabBarLabel: 'Home', // Tab Label
      tabBarIcon: ({ tintColor }) => (
        //Platform specific code for icons
        <Icon name="ios-settings" color={tintColor} size={24} />
      )
    }
  }
}, {
    initialRouteName: 'Home',
    activeTintColor: 'white',
    shifting: true
  })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
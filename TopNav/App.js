import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView
} from "react-native";
//Material Tab Bar
import {createMaterialTopTabNavigator} from 'react-navigation';
//Platform Specific Icons
import Icon from 'react-native-vector-icons/Ionicons'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{
        flex: 1, backgroundColor: '#f2f2f2'
      }}>

        <TabNavigator />
      </SafeAreaView>
    )
  }
}


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
const TabNavigator = createMaterialTopTabNavigator({
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
  // order: ['Settings', 'Home'],
  tabBarOptions: {
    activeTintColor: 'blue',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: '#f2f2f2'
    },
    indicatorStyle: {
      height: 0
    },
    showIcon: true
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
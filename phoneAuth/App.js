import React, {Component} from 'react'
import { StyleSheet, View} from 'react-native'
import firebase from 'firebase'
import Login from './src/Components/Login'
import Welcome from './src/Screen/Welcome'
import Loader from './src/Screen/Loader';

export default class App extends Component{

  state ={ loggedIn : null}

  componentWillMount(){
    firebase.initializeApp({
    })

    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({loggedIn : true})
      }else{
        this.setState({loggedIn:false})
      }
    })
  }

  renderInitialView(){
    switch(this.state.loggedIn){
      case true:
        return <Welcome />
      case false:
        return <Login />
      default:
        return <Loader size="large" />
    }
  }
  render() {
    return (
      <View style={styles.container}>
       {this.renderInitialView()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})
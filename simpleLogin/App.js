/**
 *
 * Author 
 * @bpdesilva
 * 
 * 
 */

import React, {Component} from 'react';
import {TextInput, StyleSheet, Text, View, ImageBackground, Image , Dimensions , TouchableOpacity} from 'react-native';
import bgImage from "./images/LK.jpg"
import Logo from "./images/Untitled.png"
import Icons from 'react-native-vector-icons/Ionicons'

const {width :WIDTH} = Dimensions.get('window')
export default class App extends Component {

  constructor (){
    super()
    this.state ={
      showAuthString : true,
      press : false
    }
  }

  showAuthString = () =>{
      if(this.state.press==false){
        this.setState({showAuthString:false,press:true})
      } else{
        this.setState({showAuthString:true,press:false})
      }
  }

  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
            <Image source={Logo} style={styles.logo}></Image>
            <Text style={styles.logoText}>Sri Lanka</Text>
        </View>
        <View style={styles.inputContainers}>
          <Icons name="ios-person" size={28} color={'rgb(255,255,255)'}
          style={styles.inputContainer}/>
            <TextInput
                style={styles.usernameText}
                placeholder={'Username'}
                placeholderTextColor={'rgba(255,255,255,0.7)'}
                underlineColorAndroid = 'transparent'
                autoCorrect={false}
            />
        </View>
        <View style={styles.inputContainers}>
          <Icons name="ios-lock" size={28} color={'rgb(255,255,255)'}
          style={styles.inputContainer}/>
            <TextInput
                style={styles.usernameText}
                placeholder={'Password'}
                secureTextEntry={this.state.showAuthString}
                placeholderTextColor={'rgba(255,255,255,0.7)'}
                underlineColorAndroid = 'transparent'
                autoCorrect={false}
            />
            <TouchableOpacity style={styles.btnEye} onPress={this.showAuthString.bind(this)}> 
                <Icons name= {this.state.press == false ? 'ios-eye' : 'ios-eye-off'} size={28} color={'rgba(255,255,255,0.7)'}/>
            </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnLogin}> 
                <Text style={styles.btnLoginContent}>Login</Text>
            </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height:null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo :{
    height :200,
    width: 200
  },
  logoContainer:{
    alignItems : 'center',
    marginBottom: 50
  },
  logoText:{
    color : 'white',
    fontSize : 40,
    fontFamily : 'Cochin',
    fontWeight : "400",
  },
  usernameText:{
    fontSize : 20,
    color: 'white',
    width : WIDTH -55,
    fontFamily : 'Helvetica Neue',
    height :40,
    borderRadius : 25,
    paddingLeft : 45,
    backgroundColor : 'rgba(0,0,0,0.35)',
    marginHorizontal : 25
  },
  inputContainer:{
    position:'absolute',
    top : 6,
    left : 36
  },
  inputContainers:{
    marginTop : 10
  },
  btnEye:{
    position:'absolute',
    top : 6,
    right : 36
  },
  btnLogin:{
    width : WIDTH -55,
    height :40,
    borderRadius : 25,
    backgroundColor:"#ffffff",
    alignItems : 'center',
    textAlign :'center',
    marginTop : 20
  },
  btnLoginContent:{
    marginTop : 10,
    fontFamily : 'Helvetica Neue',
    fontSize : 20,
  }
});

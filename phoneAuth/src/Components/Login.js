import React, {Component} from 'react'
import { StyleSheet, Text, View} from 'react-native'
import {MKTextField,MKColor,MKButton} from 'react-native-material-kit'
import firebase from 'firebase'
import Loader from '../Screen/Loader'
const LoginButton = MKButton.coloredButton().withText('LOGIN').build()

export default class Login extends Component{

//   onLoginOrRegister = () => {
//     const { phoneNumber } = this.state;
//     firebase.auth().signInWithPhoneNumber(phoneNumber)
//       .then((confirmResult) => {
//         // This means that the SMS has been sent to the user
//         // You need to:
//         //   1) Save the `confirmResult` object to use later
//         this.setState({ confirmResult });
//         //   2) Hide the phone number form
//         //   3) Show the verification code form
//       })
//       .catch((error) => {
//         const { code, message } = error;
//         // For details of error codes, see the docs
//         // The message contains the default Firebase string
//         // representation of the error
//       });
//   }
//   onVerificationCode = () => {
//     const { confirmResult, verificationCode } = this.state;
//     confirmResult.confirm(verificationCode)
//       .then((user) => {
//         // If you need to do anything with the user, do it here
//         // The user will be logged in automatically by the
//         // `onAuthStateChanged` listener we set up in App.js earlier
//       })
//       .catch((error) => {
//         const { code, message } = error;
//         // For details of error codes, see the docs
//         // The message contains the default Firebase string
//         // representation of the error
//       });
//   }


state={
    phoneNumber:'',
    error:'',
    loading : false
}

  onButtonPress(){
     const {phoneNumber} = this.state
     this.setState({error:'',loading:true})

     firebase.auth().signInWithPhoneNumber(phoneNumber).
        then(this.onAuthSuccess.bind(this))
        .catch(()=>{
            firebase.auth().signInWithPhoneNumber(phoneNumber)
            .then(this.onAuthSuccess.bind(this))
            .catch(this.onAuthFailed.bind(this))
        })
  }

  onAuthSuccess(){
      this.setState({
        phoneNumber:'',
        error:'',
        loading : false
      })
  }

  onAuthFailed(){
      this.setState({
          error:'Authentication Failed',
          loading :false
      })
  }

  renderLoader(){
    if (this.state.loading){
        return <Loader size="large" />
    } else{
        return <LoginButton onPress={this.onButtonPress.bind(this)}/>
    }
  }

  render() {
    return (
    //const {form,fieldStyles,loginButtonArea , errorMessage} = styles
      <View styles="form">
          <Text>Login or Create an account</Text>
        <MKTextField 
            text={this.state.phoneNumber} 
            onTextChange={phoneNumber=> this.setState({phoneNumber})} 
            textInputStyle={styles.fieldStyles} 
            placeholder={' phoneNumber '} 
            tintColor={MKColor.Teal}
        />
        <Text style={styles.errorMessage}> {this.state.error} </Text>
            <View style={styles.loginButtonArea}>
                {this.renderLoader()}
             </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    form:{
        paddingBottom : 10,
        width:0,
    },
    fieldStyles:{
        height: 40,
        color:MKColor.Orange,
        width:200
    },
    loginButtonArea :{
        margin:20,
    },
    errorMessage:{
        marginTop:15,
        fontSize: 15,
        color :'red',
        alignSelf: 'center'
    },
})


import React, {Component} from 'react'
import { Image,View,StyleSheet } from 'react-native'

export default  class Welcome extends Component{
    render() {
        return (
          <View style={styles.container}>
             <Image source={require('../Img/1.gif')} />
          </View>
        )
      }
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})
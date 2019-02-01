import React, {Component} from 'react';
import {TouchableHighlight, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  constructor(){
    super()
      this.state = {
        backgroundColor:'white'
      }
      this.changeColor =this.changeColor.bind(this)
  }

  changeColor(backgroundColor){
    this.setState({backgroundColor})
  }

  render() {
    return (
      <View style={[styles.container,{backgroundColor:this.state.backgroundColor}]}>
       <TouchableHighlight style={styles.button} onPress={()=>this.changeColor('yellow')} underlayColor="orange">
         <View stye={styles.row}>
            <View style={[styles.sample,{backgroundColor:'yellow'}]}/>
              <Text style={styles.text}>Yellow</Text>
            </View>
        </TouchableHighlight>
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
  button:{
    margin: 10,
    padding : 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'stretch',
    backgroundColor : 'rgba(255,255,255,.8)'
  },
  row:{
    flexDirection : 'row',
    alignItems:'center'
  },
  sample:{
    height :40,
    width : 40,
    borderRadius:20,
    margin : 10,
    backgroundColor : 'black'
  },
  text:{
    fontSize : 20,
    margin : 10
  },
})

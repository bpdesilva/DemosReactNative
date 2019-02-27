import React, {Component} from 'react'
import { Text,View, ListView} from 'react-native'
import {connect} from 'react-redux'
import PersonItem from './PersonItem'
import { RSA_X931_PADDING } from 'constants';

class PeopleList extends Component{
    componentWillMount(){
      const ds = new ListView.DataSource({
        rowHasChanged:(r1,r2)=> r1 !== r2,
      })
      this.dataSource = ds.cloneWithRows(this.props.people)
    }
    render() {
    return (
      <View style={styles.container}>
        <ListView enableEmptySections={true} dataSource={this.dataSource}
        renderRow={(rowData)=> <PersonItem people={rowData}/>}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:353,
    flexWrap : 'wrap',
    paddingTop : 20,
    paddingLeft:20
  },
})

const mapStateToProps = state => {
  return{people:state.people}
}

export default connect(mapStateToProps)(PeopleList)

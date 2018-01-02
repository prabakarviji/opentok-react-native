import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';



export default class Home extends Component<{}> {


  constructor(props) {
    console.log(props)
    super(props);
  }

  render() {
    console.log(this)
    return (
      <View style={styles.container}>
        <View style={{flex:0.9,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontWeight:'bold',fontSize:20}}> Demo app - TokBot</Text>
        </View>
        <View style={{flex:0.1,flexDirection:'row'}}>
          <TouchableOpacity
            style={{backgroundColor:'#27AE60',flex:0.5,margin:5,alignItems:'center',borderRadius:5,justifyContent:'center'}}
            onPress={()=>this.publishAndView("Publish")}>
            <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Publish</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor:'#F1C40F',flex:0.5,margin:5,alignItems:'center',borderRadius:5,justifyContent:'center'}}
            onPress={()=>this.publishAndView("Viewer")}>
            <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>View</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  publishAndView(type){
    this.props.navigation.navigate(type)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

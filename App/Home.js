import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ImageBackground
} from 'react-native';


import Styles from './Styles'
import Icon from 'react-native-vector-icons/Ionicons';
import FontIcon from 'react-native-vector-icons/FontAwesome';

export default class Home extends Component<{}> {


  constructor(props) {
    console.log(props)
    super(props);
  }

  static navigationOptions = {
    header: (
      <View style={Styles.header}>
        <View style={{flex:0.1,justifyContent:'center',alignItems:'center',paddingLeft:5,paddingTop:10}}>
          <Icon
            name="md-menu"
            size={28} color="white" style={{ fontWeight: 'bold' }}
          />
        </View>
        <View style={{flex:0.8,justifyContent:'center',alignItems:'center',paddingTop:5}}>
          <Text style={Styles.locBtnText}> TOK-BOT </Text>
        </View>
      </View>
    )
  };


  render() {
    console.log(this)
    return (
      <View style={Styles.container}>
        <View style={Styles.conBox}>
          <Text style={Styles.mainText}> OpenTok </Text>
          <Text style={Styles.mainText}> + </Text>
          <Text style={Styles.mainText}>  React Native </Text>
        </View>
        <View style={Styles.eventContainer}>
          <TouchableOpacity style={Styles.eventBox} onPress={()=>this.publishAndView('Publish')}>
            <View style={{ flex: 0.2, alignItems: 'center',justifyContent:'center' }}>
              <Icon
                name="ios-videocam"
                size={40} color="white" style={{ fontWeight: 'bold' }}
              />
            </View>
            <View style={{flex:0.8,justifyContent:'center'}}>
              <Text style={Styles.locBtnText}> Publish </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.eventBox} onPress={()=>this.publishAndView('Viewer')}>
            <View style={{ flex: 0.2, alignItems: 'center',justifyContent:'center' }}>
              <Icon
                name="ios-eye"
                size={40} color="white" style={{ fontWeight: 'bold' }}
              />
            </View>
            <View style={{flex:0.8,justifyContent:'center'}}>
              <Text style={Styles.locBtnText}> View </Text>
            </View>
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


import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity,Dimensions } from "react-native";
import { OTSession, OTPublisher, OTSubscriber } from 'opentok-react-native';
import Styles from './Styles'
import type { Ref } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
var {height, width} = Dimensions.get('window');

export default class Publish extends Component<{}> {

  constructor(props){
    super(props)

    this.apiKey = '';
    this.sessionId = '';
    this.token = '';
  }

  ref: Ref<typeof Publisher>;
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start' }}>
          <OTSession apiKey={this.apiKey} sessionId={this.sessionId} token={this.token}>
            <OTPublisher style={{ width: 500, height: 500 }} />
          </OTSession>
        </View>

        <View style={{flex:0.15,flexDirection:'row'}}>
          <View style={{flex:0.2}}></View>
          <TouchableOpacity
            style={styles.iconBox}
            onPress={() => {if (typeof this.ref !== 'string') this.ref.switchCamera()}}>
            <Icon
              name="ios-reverse-camera"
              size={40} color="white" style={{ fontWeight: 'bold' }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconBox}>
            <Icon
              name="ios-volume-off"
              size={40} color="white" style={{ fontWeight: 'bold' }}
            />
          </TouchableOpacity>
          <View style={{flex:0.2}}></View>
        </View>

        <View style={{flex:0.1,flexDirection:'row'}}>
          <TouchableOpacity
            style={styles.cancelBtn}
            onPress={()=>this.cancelAndBack()}>
            <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  cancelAndBack(){
    this.props.navigation.goBack()
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  publisher:{
    backgroundColor: 'black',
    height:height,
    width: width
  },
  iconBox:{
    flex:0.3,
    margin:5,
    alignItems:'center',
    borderRadius:5,
    justifyContent:'center',
    borderWidth:1,
    backgroundColor:"transparent",
    borderColor:'white'
  },
  cancelBtn:{
    backgroundColor:'#E74C3C',
    flex:1,
    margin:10,
    alignItems:'center',
    justifyContent:'center'
  },
  headerIcon:{
    flex:0.1,
    justifyContent:'center',
    alignItems:'center',
    paddingLeft:5,
    paddingTop:10
  }
});

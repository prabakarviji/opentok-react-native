
import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity,Dimensions } from "react-native";
import { OTSession, OTPublisher, OTSubscriber } from 'opentok-react-native';
import Styles from './Styles'
import type { Ref } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
var {height, width} = Dimensions.get('window');

export default class Viewer extends Component<{}> {

  constructor(props){
    super(props)

    this.apiKey = '';
    this.sessionId = '';
    this.token = '';
  }

  ref: Ref<typeof Viewer>;
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start' }}>
          <OTSession apiKey={this.apiKey} sessionId={this.sessionId} token={this.token}>
            <OTSubscriber style={{ width: 500, height: 500 }} />
          </OTSession>
        </View>

        <View style={{flex:0.1,flexDirection:'row'}}>
          <TouchableOpacity
            style={styles.cancel}
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
  cancel: {
    backgroundColor:'#E74C3C',
    flex:1,
    margin:5,
    alignItems:'center',
    borderRadius:5,
    justifyContent:'center'
  }
});

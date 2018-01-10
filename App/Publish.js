
import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity,Dimensions } from "react-native";
import OpenTok, { Publisher,Subscriber } from 'react-native-opentok';
import Styles from './Styles'
import type { Ref } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
var {height, width} = Dimensions.get('window');

const sessionId = '';
const token = '';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

export default class Publish extends Component<{}> {

  async componentWillMount() {
    await OpenTok.connect(sessionId, token);
    OpenTok.on(OpenTok.events.ON_SIGNAL_RECEIVED, e => console.log(e));
  }
  static navigationOptions = {
    header: ( /* Your custom header */
    <View style={Styles.header}>
      <View style={{flex:0.1,justifyContent:'center',alignItems:'center',paddingLeft:5,paddingTop:10}}>
        <Icon
          name="md-menu"
          size={28} color="white" style={{ fontWeight: 'bold' }}
        />
      </View>
      <View style={{flex:0.8,justifyContent:'center',alignItems:'center',paddingTop:5}}>
        <Text style={Styles.locBtnText}> Publisher </Text>
      </View>

    </View>
  )
  };
  ref: Ref<typeof Publisher>;
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:0.9}}>
          <Publisher
            sessionId={sessionId}
            onPublishStart={() => { console.log('started')}}
            style={{backgroundColor: 'black',height:height, width: width,  }}
            ref={ref => {
              this.ref = ref;
            }}
          />
        </View>
        <View style={{flex:0.1,flexDirection:'row'}}>
          <TouchableOpacity
            style={{backgroundColor:'#F1C40F',flex:0.5,margin:5,alignItems:'center',borderRadius:5,justifyContent:'center'}}
            onPress={() => {if (typeof this.ref !== 'string') this.ref.switchCamera()}}>
            <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Switch</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor:'#E74C3C',flex:0.5,margin:5,alignItems:'center',borderRadius:5,justifyContent:'center'}}
            onPress={()=>this.cancelAndBack()}>
            <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  cancelAndBack(){
    OpenTok.disconnect(sessionId)
    this.props.navigation.goBack()
  }
};

Publish.navigationOptions = {
  title: "Publish"
};

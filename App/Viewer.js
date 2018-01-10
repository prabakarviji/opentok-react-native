
import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity,Dimensions } from "react-native";
import OpenTok, {Subscriber } from 'react-native-opentok';
import type { Ref } from 'react';
var {height, width} = Dimensions.get('window');

const sessionId = '';
const token = '';



export default class Viewer extends Component<{}> {

  async componentWillMount() {
    await OpenTok.connect(sessionId, token);
    OpenTok.on(OpenTok.events.ON_SIGNAL_RECEIVED, e => console.log(e));
  }
  static navigationOptions: ({navigation}) => ({
    header: (
      <View style={Styles.header}>
        <TouchableOpacity style={styles.headerIcon} onPress={()=>this.cancelAndBack()}>
          <Icon
            name="ios-arrow-back-outline"
            size={28} color="white" style={{ fontWeight: 'bold' }}
          />
        </TouchableOpacity>
        <View style={{flex:0.8,justifyContent:'center',alignItems:'center',paddingTop:5}}>
          <Text style={Styles.locBtnText}> Publish </Text>
        </View>
      </View>
    )
  }),

  ref: Ref<typeof Viewer>;
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:0.9}}>
          <Subscriber
            sessionId={sessionId}
            style={{backgroundColor: 'black',height:height, width: width,  }}
            ref={ref => {
              this.ref = ref;
            }}
          />
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
    OpenTok.disconnect(sessionId)
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

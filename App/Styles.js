import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Used via Metrics.baseMargin
const Metrics = {
  screenWidth: width,
  screenHeight: height,
};



export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
  },
  imgContainer: {
    flex: 1,
  },
  mainImage: {
    flex: 1, width: Metrics.screenWidth, height: Metrics.screenHeight,
  },
  loginButton: {
    flex: 0.1,
    backgroundColor: '#1D2F3F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 20,
  },
  header: {
    backgroundColor: "#2E82FF",
    height: 60,
    elevation:10,
    flexDirection:'row',
    paddingTop:10
  },
  locButton:{
    flex: 0.08,
    flexDirection:'row',
    backgroundColor:'#e74c3c',
    marginLeft:60,
    marginRight:60,
    marginTop:30,
    alignItems:'center',
    justifyContent:'center',
    elevation:5
  },
  locBtnText:{
    color: 'white',
    fontSize: 18,
    fontWeight:'bold'
  },
  locInput: {
    top:20,
    left:20,
    width:(Metrics.screenWidth)-40,
    position:'absolute',
    flex: 1,
    flexDirection:'row',
    backgroundColor:'white',
    borderRadius:20
  },
  eventContainer: {
    flex:0.4
  },
  eventBox: {
    flex:0.5,
    backgroundColor: "#1FA1FF",
    margin:10,
    justifyContent:'center',
    alignItems:'center',
    elevation:5,
    flexDirection:'row'
  },
  conBox:{
    flex:0.6,
    margin:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:7,
    elevation:10,
    borderColor:'#ccc'
  },
  mainText:{
    color:'#1FA1FF',
    fontWeight:'bold',
    fontSize:30
  }
});

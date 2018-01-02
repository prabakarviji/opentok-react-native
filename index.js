import React from "react";
import { AppRegistry } from "react-native";
import App from "./App/Home";
import { StackNavigator } from "react-navigation";
import Publish from "./App/Publish";
import Viewer from "./App/Viewer";

const TokBot = props => {
  return <App navigation={props.navigation} />;
};

TokBot.navigationOptions = {
  title: "Tok-Bot"
};

const SimpleApp = StackNavigator({
  Home: {
    screen: App,
    navigationOptions: ({navigation}) => ({
      title: 'Home',
    }),
  },
  Publish: {
    screen: Publish,
    navigationOptions: ({navigation}) => ({
      title: 'Publish',
    }),
  },
  Viewer: {
    screen: Viewer,
    navigationOptions: ({navigation}) => ({
      title: 'Viewer',
    }),
  }
});

AppRegistry.registerComponent("TokBot", () => SimpleApp);

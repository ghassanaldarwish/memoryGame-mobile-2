import React, { Component } from "react";
import { View } from "react-native";
import { Router, Scene } from "react-native-router-flux";
import GameBoard from "./src/containers/GameBoard/GameBoard";
import ScoreBoard from "./src/containers/ScoreBoard/ScoreBoard";
import StartGame from "./src/containers/StartGame/StartGame";
import Classes from "./AppStyles";

export default class App extends Component {
  render() {
    return (
      <View style={Classes.app}>
        <ScoreBoard />
        <Router sceneStyle={Classes.appSceneStyle}>
          <Scene key="root">
            <Scene
              key="gameBoard"
              component={GameBoard}
              title="gameBoard"
              initial
              hideNavBar
            />
            <Scene key="test" component={StartGame} title="test" hideNavBar />
          </Scene>
        </Router>
      </View>
    );
  }
}

import React, { Component } from "react";
import { View } from "react-native";
import { Router, Scene } from "react-native-router-flux";
import GameBoard from "./src/containers/GameBoard/GameBoard";
import ScoreBoard from "./src/containers/ScoreBoard/ScoreBoard";
import GameStartBoard from "./src/containers/GameStartBoard/GameStartBoard";
import Classes from "./AppStyles";
import generateCards from "./src/generateCards/generateCards";

export default class App extends Component {
  state = {
    isStarting: false
  };

  onStartHandler = () => {
    this.setState({ isStarting: true });
  };

  render() {
    return (
      <View style={Classes.app}>
        <Router sceneStyle={Classes.appSceneStyle}>
          <Scene key="root">
            <Scene
              key="gameBoard"
              component={() => (
                <GameBoard onStartHandler={this.onStartHandler} />
              )}
              title="gameBoard"
              initial
              hideNavBar
            />
            <Scene
              key="gameStartBoard"
              component={GameStartBoard}
              title="GameStartBoard"
              hideNavBar
            />
          </Scene>
        </Router>
      </View>
    );
  }
}

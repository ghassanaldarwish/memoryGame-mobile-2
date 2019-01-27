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
    gameSize: null,
    isPageLoading: false,
    cards: generateCards(),
    isStarting: false,
    scoreOn: false,
    gameOn: false,
    isLocked: false,
    isCompleted: false,
    score: 0,
    show: true,
    highestScore: 0
  };
  render() {
    console.log("apppppp", this.state.cards);
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
            <Scene
              key="gameStartBoard"
              component={() => <GameStartBoard cards={this.state.cards} />}
              title="GameStartBoard"
              hideNavBar
            />
          </Scene>
        </Router>
      </View>
    );
  }
}

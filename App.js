import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Dimensions } from "react-native";
import { Router, Scene } from "react-native-router-flux";
import GameBoard from "./src/containers/GameBoard/GameBoard";
import ScoreBoard from "./src/containers/ScoreBoard/ScoreBoard";
import StartGame from "./src/containers/StartGame/StartGame";

export default class App extends Component {
  render() {
    return (
      <View
        style={{
          width: "100%",
          height: "100%"
        }}
      >
        {/* <View style={{ width: "100%" }}> */}
        <ScoreBoard />
        <Router
          sceneStyle={{
            width: "100%",
            backgroundColor: "red",
            paddingTop: Dimensions.get("window").height / 7
          }}
        >
          <Scene key="root">
            {/* <Scene
                key="scoreBoard"
                component={ScoreBoard}
                title="scoreBoard"
              /> */}

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
        {/* </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});

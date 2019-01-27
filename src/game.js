import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import GameBoard from "./containers/GameBoard";
import ScoreBoard from "./containers/ScoreBoard";

export default class Game extends Component {
  render() {
    return (
      <View style={{ width: "100%" }}>
        <ScoreBoard />
        <GameBoard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50
  }
});

import React, { Component } from "react";
import { Text, View } from "react-native";
import Classes from "./ScoreBoardStyles";

export default class ScoreBoard extends Component {
  render() {
    return (
      <View style={Classes.scoreBoard}>
        <Text style={Classes.scoreBoardTextTittle}>Memory Game</Text>
        <View style={{ flexDirection: "row", alignContent: "space-between" }}>
          <Text style={{ marginRight: 10 }}>HS: 120</Text>
          <Text style={{}}>S: 60</Text>
        </View>
      </View>
    );
  }
}

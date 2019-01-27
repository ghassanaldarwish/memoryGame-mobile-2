import React, { Component } from "react";
import { Text, View } from "react-native";
import Classes from "./StartGameStyles";

export default class StartGame extends Component {
  render() {
    return (
      <View style={Classes.startGame}>
        <Text style={Classes.text}>START GAME</Text>
      </View>
    );
  }
}

import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import Classes from "./GameButtonStyles";
import { Actions } from "react-native-router-flux";

export default class GameButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => Actions.gameStartBoard()}
        style={Classes.playButton}
      >
        <Text style={Classes.playButtonText}>PLAY NOW</Text>
      </TouchableOpacity>
    );
  }
}

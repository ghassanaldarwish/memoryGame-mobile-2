import React, { Component } from "react";
import { View } from "react-native";
import CardBack from "../../components/CardBack/CardBack";
import GameButton from "../../components/GameButton/GameButton";
import Classes from "./GameBoardStyles";

export default class GameBoard extends Component {
  render() {
    return (
      <View style={Classes.gameBoard}>
        <CardBack />
        <GameButton />
      </View>
    );
  }
}

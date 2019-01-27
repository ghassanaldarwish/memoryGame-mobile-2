import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import CardBack from "../../components/CardBack/CardBack";
import GameButton from "../../components/GameButton/GameButton";
import Classes from "./GameBoardStyles";

export default class GameBoard extends Component {
  render() {
    return (
      <View style={Classes.gameBoard}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(i => (
          <CardBack key={i} />
        ))}
        <GameButton />
      </View>
    );
  }
}

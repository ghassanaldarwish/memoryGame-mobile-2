import React, { Component, Fragment } from "react";
import { View, Text } from "react-native";
import CardBack from "../../components/CardBack/CardBack";
import GameButton from "../../components/GameButton/GameButton";
import Classes from "./GameBoardStyles";

export default class GameBoard extends Component {
  render() {
    return (
      <Fragment>
        <View style={Classes.GameBoardHeader}>
          <Text style={Classes.GameBoardHeaderTextTittle}>Memory Game</Text>
        </View>
        <View style={Classes.gameBoard}>
          <CardBack />
          <GameButton onStartHandler={this.props.onStartHandler} />
        </View>
      </Fragment>
    );
  }
}

import React, { Component } from "react";
import { View, Text } from "react-native";
import CardBack from "../../components/CardBack/CardBack";

import Cards from "../../components/Card/Card";

import Classes from "./GameStartBoardStyles";

export default class GameStartBoard extends Component {
  render() {
    return (
      <View style={Classes.GameStartBoard}>
        {this.props.cards.map(card => (
          <Cards key={card.id} img={card.img} />
        ))}
      </View>
    );
  }
}

import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import BG from "../assets/back.jpg";

import CardBack from "../components/CardBack";
import GameButton from "../components/GameButton";

export default class GameBoard extends Component {
  render() {
    return (
      <View
        style={{
          with: "100%",
          height: "100%",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          alignContent: "center",
          position: "relative"
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(i => (
          <CardBack key={i} />
        ))}
        <GameButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});

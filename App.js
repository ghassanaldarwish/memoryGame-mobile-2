import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Game from "./src/game";

export default class App extends Component {
  render() {
    return (
      <View
        style={{
          width: "100%",
          height: "50%"
        }}
      >
        <Game />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});

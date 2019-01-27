import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class ScoreBoard extends Component {
  render() {
    return (
      <View
        style={{
          with: "100%",
          backgroundColor: "gold",
          height: "25%",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={{ fontSize: 20, color: "#000", fontWeight: "bold" }}>
          {" "}
          Memory Game{" "}
        </Text>
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

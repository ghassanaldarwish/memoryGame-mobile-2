import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import BG from "../assets/back.jpg";

export default class CardBack extends Component {
  render() {
    return (
      <Image
        source={BG}
        style={{
          width: "24.5%",
          height: Dimensions.get("window").width / 4,
          borderRadius: 7
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});

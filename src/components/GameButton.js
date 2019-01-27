import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import BG from "../assets/back.jpg";

export default class GameButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => console.log("hallooooo")}
        style={{
          width: Dimensions.get("window").width / 2,
          height: Dimensions.get("window").width / 7,
          backgroundColor: "#fff",
          justifyContent: "center",
          alignContent: "center",
          position: "absolute",
          top: Dimensions.get("window").height / 3,
          borderWidth: 1
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 20, color: "#000" }}>
          PLAY NOW
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});

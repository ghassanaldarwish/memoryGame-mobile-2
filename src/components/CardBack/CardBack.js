import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import BG from "../../assets/back.jpg";
import Classes from "./CardBackStyles";

export default class CardBack extends Component {
  render() {
    return <Image source={BG} style={Classes.backCard} />;
  }
}

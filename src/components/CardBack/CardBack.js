import React, { Component } from "react";
import { Image } from "react-native";
import BG from "../../assets/back.jpg";
import Classes from "./CardBackStyles";

export default class CardBack extends Component {
  render() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(i => (
      <Image key={i} source={BG} style={Classes.backCard} />
    ));
  }
}

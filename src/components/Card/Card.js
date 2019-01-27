import React, { Component } from "react";
import { Image } from "react-native";
import BG from "../../assets/back.jpg";
import Classes from "./CardStyles";

export default class GameCard extends Component {
  render() {
    return <Image source={this.props.img} style={Classes.card} />;
  }
}

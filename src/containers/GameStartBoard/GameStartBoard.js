import React, { Component } from "react";
import { View, Image, Text, Animated, TouchableOpacity } from "react-native";
import CardBack from "../../components/CardBack/CardBack";

import Cards from "../../components/Card/Card";

import Classes from "./GameStartBoardStyles";

import BG from "../../assets/back.jpg";

export default class GameStartBoard extends Component {
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    });
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ["0deg", "180deg"]
    });
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ["180deg", "360deg"]
    });
    this.frontOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [1, 0]
    });
    this.backOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [0, 1]
    });
  }
  flipCard = () => {
    if (this.value >= 90) {
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10
      }).start();
    } else {
      Animated.spring(this.animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10
      }).start();
    }
  };
  render() {
    const frontAnimatedStyle = {
      transform: [{ rotateY: this.frontInterpolate }]
    };
    const backAnimatedStyle = {
      transform: [{ rotateY: this.backInterpolate }]
    };
    return (
      <View style={Classes.GameStartBoard}>
        {this.props.cards.map(card => (
          <View
            key={card.id}
            style={{
              flexWrap: "wrap",
              backgroundColor: "black"
            }}
          >
            <Animated.View
              style={[
                Classes.flipCard,
                frontAnimatedStyle,
                { opacity: this.frontOpacity }
              ]}
            >
              <Image
                source={BG}
                style={Classes.backCard}
                onPress={this.flipCard}
              />
            </Animated.View>

            <Animated.View
              style={[
                Classes.flipCard,
                Classes.flipCardBack,
                backAnimatedStyle,
                { opacity: this.backOpacity }
              ]}
            >
              <Cards img={card.img} />
            </Animated.View>
            <TouchableOpacity onPress={this.flipCard}>
              <Text>ggg</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  }
}

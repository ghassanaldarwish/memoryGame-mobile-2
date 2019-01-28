import React, { Component, Fragment } from "react";
import { View, Image, Text, Animated, TouchableOpacity } from "react-native";
import CardBack from "../../components/CardBack/CardBack";

import Cards from "../../components/Card/Card";

import Classes from "./GameStartBoardStyles";

import BG from "../../assets/back.jpg";
import ScoreBoard from "../ScoreBoard/ScoreBoard";

class FlipCard extends Component {
  state = {
    markOnCard: true
  };
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
  flipCard = id => {
    if (true) {
      this.setState({ markOnCard: !this.state.markOnCard });
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

      setTimeout(() => {
        this.setState({ markOnCard: !this.state.markOnCard });
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
      }, 2000);
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
      <View>
        <Animated.View
          style={[
            Classes.flipCard,
            frontAnimatedStyle,
            {
              opacity: this.frontOpacity
            }
          ]}
        >
          <Image source={BG} style={Classes.backCard} onPress={this.flipCard} />
        </Animated.View>

        <Animated.View
          style={[
            Classes.flipCard,
            Classes.flipCardBack,
            backAnimatedStyle,
            { opacity: this.backOpacity }
          ]}
        >
          <Cards img={this.props.card.img} />
        </Animated.View>
        {this.state.markOnCard ? (
          <TouchableOpacity
            activeOpacity={0.7}
            style={Classes.gameStartBoardCardTouchableOpacity}
            onPress={() => this.flipCard(this.props.card.id)}
          >
            <Text style={Classes.gameStartBoardCardTextMark}>?</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
}

export default class GameStartBoard extends Component {
  render() {
    return (
      <Fragment>
        <ScoreBoard />
        <View style={Classes.gameStartBoard}>
          {this.props.cards.map(card => (
            <FlipCard key={card.id} card={card} />
          ))}
        </View>
      </Fragment>
    );
  }
}

import React, { Component, Fragment } from "react";
import { View, Image, Text, Animated, TouchableOpacity } from "react-native";
import CardBack from "../../components/CardBack/CardBack";

import Cards from "../../components/Card/Card";

import Classes from "./GameStartBoardStyles";

import BG from "../../assets/back.jpg";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import generateCards from "../../generateCards/generateCards";

class FlipCard extends Component {
  state = {
    markOnCard: true,
    cardCheck: []
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
  flipCard = (card, index) => {
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
        // if (!this.props.show) {
        //   setTimeout(() => this.setState({ cardCheck: false }), 1000);
        // }
      }

      this.props.flipCardCheck(index, card);

      this.setState({ cardCheck: this.state.cardCheck.push(card.cardName) });

      console.log(this.state.cardCheck);

      // setTimeout(() => {
      //   this.setState({ markOnCard: !this.state.markOnCard });
      //   if (this.value >= 90) {
      //     Animated.spring(this.animatedValue, {
      //       toValue: 0,
      //       friction: 8,
      //       tension: 10
      //     }).start();
      //   } else {
      //     Animated.spring(this.animatedValue, {
      //       toValue: 180,
      //       friction: 8,
      //       tension: 10
      //     }).start();
      //   }
      // }, 2000);
    }
  };
  componentDidUpdate() {
    if (!this.props.show) {
      // this.setState({ markOnCard: !this.state.markOnCard });
      if (this.value >= 90) {
        Animated.spring(this.animatedValue, {
          toValue: 0,
          friction: 8,
          tension: 10
        }).start();
      }
      // else {
      //   Animated.spring(this.animatedValue, {
      //     toValue: 180,
      //     friction: 8,
      //     tension: 10
      //   }).start();
      // }
    }
  }
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
            onPress={() => this.flipCard(this.props.card, this.props.index)}
          >
            <Text style={Classes.gameStartBoardCardTextMark}>?</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
}

export default class GameStartBoard extends Component {
  state = {
    isPageLoading: false,
    cards: generateCards(),
    scoreOn: false,
    gameOn: false,
    isLocked: false,
    isCompleted: false,
    score: 0,
    show: true,
    highestScore: 0,
    flipTowCards: []
  };

  componentDidUpdate() {
    console.log("weeeeeeeee", this.state.cards);
    console.log("state", this.state);
  }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate", this.state.cards);
  //   const flipCardPick = this.state.cards.filter(
  //     (item, i) => item.flipped === true
  //   );
  //   if (flipCardPick.length <= 1) {
  //     this.openCards();
  //   }
  //   if (flipCardPick.length === 2) {
  //     this.lockCards();
  //   }

  // this.matchCardCheck(flipCardPick);

  // console.log("weeeeeeeee", this.state.cards);

  // console.log("hahahah", this.state.flipTowCards);
  // }
  openCards = () => {
    this.setState({ show: true });
  };
  lockCards = () => {
    this.setState({ show: false });
  };
  // matchCardCheck = flipCardPick => {
  //   this.setState({ flipTowCards: flipCardPick });
  // };

  componentDidMount() {
    console.log("weeeeeeeee", this.state.cards);
  }

  flipCardCheck = (index, card) => {
    let flipCardCheck = this.state.cards.map((item, i) =>
      i === index ? { ...item, flipped: true } : item
    );
    var flipCardPick = [];
    flipCardPick = flipCardCheck.filter((item, i) => item.flipped === true);

    // if (
    //   flipCardPick.length === 2 &&
    //   flipCardPick[0].cardName === flipCardPick[0].cardName &&
    //   flipCardPick[0].flipped === true &&
    //   flipCardPick[1].flipped === true
    // ) {
    //   flipCardCheck = { ...flipCardCheck[index], matched: true };
    // }
    if (flipCardPick.length <= 1) {
      this.openCards();
    }
    if (flipCardPick.length === 2) {
      setTimeout(() => {
        this.lockCards();
        flipCardPick = [];
      }, 1000);
    }

    this.setState({ cards: flipCardCheck });
    // console.log("flipCardCheck", this.state.cards);

    // this.matchCardCheck(index, card);

    // this.setState({ cards: flipCardCheck });

    // const matchCardCheck = this.state.cards.map((item, i) =>
    //   item.flipped === true &&
    //   card.flipped === true &&
    //   item.cardName === card.cardName
    //     ? { ...item, matched: true }
    //     : item
    // );

    // this.setState({ cards: flipCardCheck });

    // const matchedCards = this.state.cards.filter(
    //   i => i.flipped === true && i.cardName === card.cardName
    // );

    // this.setState({ cards: cloneState.cards });
  };

  render() {
    return (
      <Fragment>
        <ScoreBoard />
        <View style={Classes.gameStartBoard}>
          {this.state.cards.map((card, index) => (
            <FlipCard
              key={index}
              card={card}
              index={index}
              flipCardCheck={this.flipCardCheck}
              show={this.state.show}
            />
          ))}
        </View>
      </Fragment>
    );
  }
}

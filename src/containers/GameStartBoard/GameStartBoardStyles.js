import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  gameStartBoard: {
    backgroundColor: "blue",
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    // alignContent: "center",
    position: "relative"
  },
  backCard: {
    width: "100%",
    height: "100%",
    borderRadius: 7
  },

  flipCard: {
    width: Dimensions.get("window").width / 4,
    height: Dimensions.get("window").width / 4,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "blue"
    // backfaceVisibility: "hidden"
  },
  flipCardBack: {
    backgroundColor: "#ff0",
    position: "absolute",
    top: 0,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 12
  },
  gameStartBoardCard: {
    flexWrap: "wrap",
    backgroundColor: "black",
    position: "relative"
  },
  gameStartBoardCardTouchableOpacity: {
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 12,
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center"
  },
  gameStartBoardCardTextMark: {
    color: "#fff",
    fontSize: 40,
    textAlign: "center"
  }
});

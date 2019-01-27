import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  GameStartBoard: {
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
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
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
    backgroundColor: "red",
    position: "absolute",
    top: 0
  }
});

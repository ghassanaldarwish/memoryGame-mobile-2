import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  scoreBoard: {
    width: "100%",
    backgroundColor: "gold",
    height: "10%",
    alignItems: "center",
    marginBottom: Dimensions.get("window").height / 7

    // justifyContent: "center"
  },
  scoreBoardTextTittle: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold"
  }
});

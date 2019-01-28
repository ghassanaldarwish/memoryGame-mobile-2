import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  gameBoard: {
    backgroundColor: "green",
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    // alignContent: "center",
    position: "relative",
    marginTop: Dimensions.get("window").height / 6
  },
  GameBoardHeader: {
    width: "100%",
    backgroundColor: "gold",
    height: "10%",
    alignItems: "center"
  },
  GameBoardHeaderTextTittle: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold"
  }
});

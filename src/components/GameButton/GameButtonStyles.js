import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  playButton: {
    width: Dimensions.get("window").width / 2,
    height: Dimensions.get("window").width / 7,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignContent: "center",
    position: "absolute",
    top: Dimensions.get("window").height / 3,
    borderWidth: 1
  },
  playButtonText: {
    textAlign: "center",
    fontSize: 22,
    color: "#000"
  }
});

import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  app: {
    width: "100%",
    height: "100%"
  },
  appSceneStyle: {
    width: "100%",
    backgroundColor: "pink",
    paddingTop: Dimensions.get("window").height / 7
  }
});

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";

//------------------------------------------- Fiesta
import FiestaSuperGrid from "../../fiesta-packages/tq-anz-super-grid";

//--------------------------------------------------

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});
const gridItems = [
  { name: "CAMERA", code: "Camera" },
  { name: "FORM BUILDER", code: "FormBuilder" },
  { name: "SUPER GRID", code: "#f9521f" },
  { name: "COPYRIGHT", code: "#f9521f" },
  { name: "CHAT", code: "#f9521f" },
  { name: "AVATAR", code: "#f9521f" },
  { name: "BUTTON", code: "#f9521f" },
  { name: "CACHE", code: "#f9521f" },
  { name: "ACCORDION", code: "#f9521f" },
  { name: "CUSTOMER DETAILS", code: "#f9521f" },
  { name: "DETAILS", code: "#f9521f" },
  { name: "LOADING MODEL", code: "#f9521f" },
  { name: "MAP", code: "#f9521f" },
  { name: "NAVIGATION", code: "#f9521f" },
  { name: "NOTES", code: "#f9521f" },
  { name: "OFFLINE", code: "#f9521f" },
  { name: "PICKER", code: "#f9521f" },
  { name: "RADIO BUTTON", code: "#f9521f" },
  { name: "RADIO IMAGE BUTTON", code: "#f9521f" },
  { name: "SELECT DROP DOWN", code: "#f9521f" }
];
class HomeScreen extends Component {
  static navigationOptions = {
    title: "Welcome"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{ height: 60 }}>
          <Image
            style={styles.image}
            source={require("../assets/tquila-anz-logo_LG.jpg")}
          />
        </View>
        <View style={{ height: 120 }}>
          <Image
            style={styles.imageFiesta}
            source={require("../assets/fiestalogo.png")}
          />
        </View>
        <FiestaSuperGrid gridItems={gridItems} nav={navigate} />
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  image: {
    top: 20,
    width: 320,
    resizeMode: "contain"
  },
  imageFiesta: {
    width: 180,
    resizeMode: "contain"
  }
});

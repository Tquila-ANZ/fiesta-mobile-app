import React, { Component } from "react";
import { Alert, View, Text } from "react-native";
import { CameraKitCameraScreen } from "react-native-camera-kit";

class CameraScreen extends Component {
  onBottomButtonPressed(event) {
    const captureImages = JSON.stringify(event.captureImages);
    Alert.alert(
      `${event.type} button pressed`,
      `${captureImages}`,
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  }

  render() {
    return (
      <CameraKitCameraScreen
        actions={{ rightButtonText: "Done", leftButtonText: "Cancel" }}
        onBottomButtonPressed={event => this.onBottomButtonPressed(event)}
        flashImages={{
          on: require("./images/flashOn.png"),
          off: require("./images/flashOff.png"),
          auto: require("./images/flashAuto.png")
        }}
        cameraFlipImage={require("./images/cameraFlipIcon.png")}
        captureButtonImage={require("./images/cameraButton.png")}
      />
    );
  }
}

export default CameraScreen;

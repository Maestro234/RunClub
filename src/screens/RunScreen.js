import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HeaderTop from "../components/Header";

const RunScreen = () => {
  return (
    <View>
      <HeaderTop title="Run" />
      <Text style={styles.text}>Run Screen</Text>
    </View>
  );
};

RunScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default RunScreen;

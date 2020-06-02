import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RunScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Run Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default RunScreen;

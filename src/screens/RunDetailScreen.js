import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RunDetailScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Run Detail Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default RunDetailScreen;

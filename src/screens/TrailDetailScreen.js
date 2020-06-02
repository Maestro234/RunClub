import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const TrailsDetailScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.text}>trail Detail Screen</Text>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default TrailsDetailScreen;

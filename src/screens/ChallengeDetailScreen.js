import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ChallengeDetailScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.text}>Challenge Detail Screen</Text>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default ChallengeDetailScreen;

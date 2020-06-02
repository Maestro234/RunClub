import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CompletedChallengeListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.text}>Completed Challenge List Screen</Text>
      <Button
        title="Go to Challenge Detail"
        onPress={() => navigation.navigate("challengeDetail")}
      />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default CompletedChallengeListScreen;

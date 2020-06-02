import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MyGoalScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.text}>My Goal Screen</Text>
      <Button title="Edit" onPress={() => console.log("edit")} />
      <Button title="Remove" onPress={() => console.log("remove")} />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default MyGoalScreen;

import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const RunListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.text}>Run List Screen</Text>
      <Button
        title="Go to Run Details"
        onPress={() => navigation.navigate("runDetail")}
      />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default RunListScreen;

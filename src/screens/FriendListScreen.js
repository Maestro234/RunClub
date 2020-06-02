import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const FriendListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.text}>Friend List Screen</Text>
      <Button title="Remove" onPress={() => console.log("remove")} />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default FriendListScreen;

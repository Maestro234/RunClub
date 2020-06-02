import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const AddFriendScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.text}>Add Friend Screen</Text>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default AddFriendScreen;

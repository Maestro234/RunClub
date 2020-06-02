import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const EditProfileScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.text}>Edit Profile Screen</Text>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default EditProfileScreen;

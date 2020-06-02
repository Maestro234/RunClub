import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const TrailsNearByScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.text}>trail NearBy Screen</Text>
      <Button
        title="Go to Trail Detail"
        onPress={() => navigation.navigate("trailDetail")}
      />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default TrailsNearByScreen;

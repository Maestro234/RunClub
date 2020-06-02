import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ExploreScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.text}>Explore</Text>
      <Button
        title="Go to Trails Near by"
        onPress={() => navigation.navigate("trailsNearBy")}
      />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default ExploreScreen;

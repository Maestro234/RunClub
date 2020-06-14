import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import HeaderTop from "../components/Header";

const ExploreScreen = ({ navigation }) => {
  return (
    <>
      <HeaderTop title="Account" />
      <Text style={styles.text}>Explore</Text>
      <Button
        title="Go to Trails Near by"
        onPress={() => navigation.navigate("trailsNearBy")}
      />
    </>
  );
};

ExploreScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default ExploreScreen;

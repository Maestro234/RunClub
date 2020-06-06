import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Header } from "react-native-elements";

const ExploreScreen = ({ navigation }) => {
  return (
    <>
      <Header
        statusBarProps={{ barStyle: "light-content" }}
        barStyle="light-content"
        leftComponent={{ icon: "person", color: "#fff" }}
        centerComponent={{
          text: "Explore",
          style: { color: "#fff" },
        }}
        rightComponent={{ icon: "settings", color: "#fff" }}
        containerStyle={{
          justifyContent: "space-around",
        }}
      />
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

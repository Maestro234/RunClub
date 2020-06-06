import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const AccountScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Account Screen</Text>
      <Button title="Sign out" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default AccountScreen;

import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Dashboard = ({ navigation }) => {
  return (
    <>
      <Text style={styles.text}>Dashboard</Text>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default Dashboard;

import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import HeaderTop from "../components/Header";

const Dashboard = ({ navigation }) => {
  return (
    <>
      <HeaderTop title="Dashboard" />
      <Text style={styles.text}>Dashboard</Text>
    </>
  );
};

Dashboard.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default Dashboard;

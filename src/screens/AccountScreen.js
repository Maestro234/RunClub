import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import HeaderTop from "../components/Header";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <>
      <HeaderTop title="Account" />
      <Text style={styles.text}>Account Screen</Text>
      <Button title="Sign out" onPress={signout} />
    </>
  );
};

AccountScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default AccountScreen;

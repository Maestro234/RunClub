import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ProfileScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.text}>Profile Screen</Text>
      <Button
        title="Go to Edit Profile"
        onPress={() => navigation.navigate("editProfile")}
      />
      <Button
        title="Go to Run List"
        onPress={() => navigation.navigate("runList")}
      />
      <Button
        title="Go to Friend List Screen"
        onPress={() => navigation.navigate("friendsList")}
      />
      <Button
        title="Go to Add Friend"
        onPress={() => navigation.navigate("addFriend")}
      />
      <Button
        title="Go to Current Challenges Screen"
        onPress={() => navigation.navigate("currentChallenges")}
      />
      <Button
        title="Go to Completed Challenges Screen"
        onPress={() => navigation.navigate("completedChallenges")}
      />
      <Button
        title="Go to My Plan Screen"
        onPress={() => navigation.navigate("myPlan")}
      />
      <Button
        title="Go to My Goal Screen"
        onPress={() => navigation.navigate("myGoal")}
      />
      <Button
        title="Go to Explore"
        onPress={() => navigation.navigate("explore")}
      />
    </>
  );
};

ProfileScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default ProfileScreen;

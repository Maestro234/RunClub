import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProfileScreen from "./src/screens/ProfileScreen";
import RunDetailScreen from "./src/screens/RunDetailScreen";
import RunListScreen from "./src/screens/RunListScreen";
import RunScreen from "./src/screens/RunScreen";
import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";
import ExploreScreen from "./src/screens/ExploreScreen";
import Dashboard from "./src/screens/Dashboard";
import EditProfileScreen from "./src/screens/EditProfileScreen";
import FriendListScreen from "./src/screens/FriendListScreen";
import AddFriendScreen from "./src/screens/AddFriendScreen";
import CurrentChallengeListScreen from "./src/screens/CurrentChallengeListScreen";
import CompletedChallengeListScreen from "./src/screens/CompletedChallengeListScreen";
import MyGoalScreen from "./src/screens/MyGoalScreen";
import MyPlanScreen from "./src/screens/MyPlanScreen";
import TrailsNearByScreen from "./src/screens/TrailsNearByScreen";
import TrailsDetailScreen from "./src/screens/TrailDetailScreen";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Provider as AuthProvider } from "./src/context/AuthContext";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    signup: SignupScreen,
    signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    dashboard: Dashboard,
    profileFlow: createStackNavigator({
      profile: ProfileScreen,
      editProfile: EditProfileScreen,
      friendsList: FriendListScreen,
      addFriend: AddFriendScreen,
      currentChallenges: CurrentChallengeListScreen,
      completedChallenges: CompletedChallengeListScreen,
      myGoal: MyGoalScreen,
      myPlan: MyPlanScreen,
      runList: RunListScreen,
      runDetail: RunDetailScreen,
    }),
    run: RunScreen,
    exploreFlow: createStackNavigator({
      explore: ExploreScreen,
      trailsNearBy: TrailsNearByScreen,
      trailDetail: TrailsDetailScreen,
    }),
  }),
});

const App = createAppContainer(switchNavigator);

/* 

   AuthProvider 
        |
        V
    Navigator

*/

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

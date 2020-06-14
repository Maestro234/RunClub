import "../_mockLocation";
import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
import HeaderTop from "../components/Header";
import Map from "../components/Map";

const RunScreen = () => {
  const [err, setErr] = useState(null);

  const beginTracking = async () => {
    try {
      await requestPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          console.log(location);
        }
      );
    } catch (error) {
      setErr(error);
    }
  };

  useEffect(() => {
    beginTracking();
  }, []);

  return (
    <>
      <HeaderTop title="Run" />
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </>
  );
};

RunScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
  map: {
    height: 500,
  },
});

export default RunScreen;

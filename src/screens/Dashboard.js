import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { ProgressChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { FlatList } from "react-native-gesture-handler";
import Header from "../components/Header";

const Dashboard = ({ navigation }) => {
  const screenWidth = Dimensions.get("window").width;

  const data = {
    labels: ["Bike", "Run", "Walk", "Distance", "Calories"], // optional
    data: [0.6, 0.8, 0.3, 0.7, 0.65],
  };

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(0, 110, 199, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2, // optional, default 3
  };

  const [selectedIndex, setSelectedIndex] = useState(0);
  console.log(selectedIndex);

  const list = [
    {
      name: "Paul Mba",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
      subtitle: "Ran 12 miles",
    },
    {
      title: "hello",
      name: "Babatunde",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
      subtitle: "Ran 12 miles",
    },
    {
      name: "Jacob Abas",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
      subtitle: "Ran 12 miles",
    },
  ];

  return (
    <>
      <Header text="Dashboard" />

      <Card title="Today - June 6, 2020" justifyContent="center">
        <ProgressChart
          data={data}
          width={screenWidth}
          height={300}
          strokeWidth={15}
          radius={45}
          chartConfig={chartConfig}
          hideLegend={true}
        />
      </Card>
      <Card>
        <SegmentedControlTab
          badges={[3, 6]}
          values={["Explore", "Friends"]}
          selectedIndex={selectedIndex}
          onTabPress={setSelectedIndex}
        />
        {selectedIndex === 1 ? (
          <FlatList
            style={styles.friends}
            keyExtractor={(list) => list.name}
            data={list}
            renderItem={({ item }) => (
              <ListItem
                title={item.name}
                subtitle={item.subtitle}
                leftAvatar={{ source: { uri: item.avatar_url } }}
                bottomDivider
                chevron
              />
            )}
          />
        ) : (
          <Text>Explore coming soon</Text>
        )}
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    fontSize: 60,
  },
  friends: {
    fontSize: 4,
  },
});

export default Dashboard;

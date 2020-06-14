import React from "react";
import { Header } from "react-native-elements";

const HeaderTop = ({ title }) => {
  return (
    <Header
      statusBarProps={{ barStyle: "light-content" }}
      barStyle="light-content"
      leftComponent={{ icon: "person", color: "#fff" }}
      centerComponent={{
        text: title,
        style: { color: "#fff" },
      }}
      rightComponent={{ icon: "settings", color: "#fff" }}
      containerStyle={{
        justifyContent: "space-around",
      }}
    />
  );
};

export default HeaderTop;

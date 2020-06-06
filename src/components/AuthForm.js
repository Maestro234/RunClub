import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "./Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, buttonTitle }) => {
  //create states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input
        label="Your Email Address"
        placeholder="email@address.com"
        leftIcon={{ type: "font-awesome", name: "envelope" }}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        label="Password"
        placeholder="Password"
        leftIcon={{ type: "font-awesome", name: "lock" }}
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      {errorMessage ? <Text style={styles.text}>{errorMessage}</Text> : null}
      <Spacer>
        <Button
          title={buttonTitle}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
  text: {
    color: "red",
    fontSize: 16,
  },
});

export default AuthForm;

import createDataContext from "./createDataContext";
import runApi from "../api/run";
import { AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";

//actions
const authReducer = (state, action) => {
  switch (action.type) {
    case "add_err":
      return { ...state, errorMessage: action.payload };
    case "signin":
      //once user signs up/in remove all other state and return only token state
      return { token: action.payload };
    case "clear_error_message":
      //return new state obj, copy over existing states and reset errorMessage
      return { ...state, errorMessage: "" };
    case "signout":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};

const autoSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("dashboard");
  } else {
    navigate("loginFlow");
  }
};

//modify state and set error message to empty when switching screens
const clearErrorMessage = (dispatch) => () => {
  //dispacth action to cause state obj to be updated
  dispatch({ type: "clear_error_message" });
};

//create an sign up action function
const signup = (dispatch) => async ({ email, password }) => {
  //make a request to express api to sign up with data
  //if sign up, modify state and say the user is authenticated
  try {
    const response = await runApi.post("/signup", { email, password });
    //store token on user device
    await AsyncStorage.setItem("token", response.data.token);
    //dispacth action to update token state
    dispatch({
      type: "signin",
      payload: response.data.token,
    });
    //navigate to dashboard
    navigate("dashboard");
  } catch (err) {
    //if sign up fails, send error message to user
    dispatch({
      type: "add_err",
      payload: "Error with signup",
    });
    console.log(err.response.data);
  }
};

//create an sign in action function
const signin = (dispatch) => async ({ email, password }) => {
  //make a request to express api to sign up with data
  try {
    const response = await runApi.post("/signin", { email, password });
    //store token on user device
    await AsyncStorage.setItem("token", response.data.token);
    //dispacth action to update token state
    dispatch({
      type: "signin",
      payload: response.data.token,
    });
    //navigate to dashboard
    navigate("dashboard");
  } catch (err) {
    dispatch({
      type: "add_err",
      payload: "Error signing in",
    });
  }
  //if sign in, modify state and say the user is authenticated
  //if sign in fails, send error message to user
};

//create an sign in action function
const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  navigate("loginFlow");
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signin, signup, signout, clearErrorMessage, autoSignin },
  { token: null, errorMessage: "" }
);

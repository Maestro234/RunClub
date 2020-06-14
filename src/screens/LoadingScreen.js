import React, { useEffect, useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";

const LoadingScreen = () => {
  const { autoSignin } = useContext(AuthContext);

  useEffect(() => {
    autoSignin();
  }, []);
  return null;
};

export default LoadingScreen;

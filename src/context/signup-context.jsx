import { createContext, useState } from "react";

export const SignupContext = createContext({
  email: null,
  setEamail: () => null,
});

export const SignupProvider = ({ children }) => {
  const [email, setEamail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [erorMsg, setErrorMsg] = useState([]);
  const value = {
    email,
    setEamail,
    username,
    setUsername,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    erorMsg,
    setErrorMsg,
    loggedIn,
    setLoggedIn,
  };

  return (
    <SignupContext.Provider value={value}>{children}</SignupContext.Provider>
  );
};

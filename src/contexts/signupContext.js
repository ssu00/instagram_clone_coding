import React, { createContext } from "react";
const UserContext = createContext({
  user: { name: "", password: "", email: "", phone: "" },
  setName: () => {},
  setPassword: () => {},
  setEmail: () => {},
  setPhone: () => {},
});

export default UserContext;

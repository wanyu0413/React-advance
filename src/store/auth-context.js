import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  // for better IDE auto-completion
});

export default AuthContext;

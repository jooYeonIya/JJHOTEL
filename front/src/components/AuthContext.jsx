
import React, { createContext, useState, useContext } from "react"

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const checkLogin = () => setIsLoggedIn(true)
  const doLogout = () => setIsLoggedIn(false)

  return (
    <AuthContext.Provider value={{ isLoggedIn, checkLogin, doLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext)
}

import {useState} from "react";
import { doLogin } from "../actions";

function useAuth() {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    // fake API call
    const loggedIn = await doLogin(username, password)
    loggedIn && setUser({ name: username });
  };

  const logout = () => setUser(null);

  return { user, login, logout, isAuthenticated: !!user };
}

export {useAuth}
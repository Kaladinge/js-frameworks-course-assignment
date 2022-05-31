import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const AuthContext = React.createContext([null, () => {}]);
export const FavContext = React.createContext([null, () => {}]);

function AuthProvider(props) {
  const [token, setToken] = useLocalStorage("auth", null);
  const [favorite, setFavorite] = useLocalStorage("fav", []);

  return (
    <AuthContext.Provider value={[token, setToken]}>
      <FavContext.Provider value={[favorite, setFavorite]}>
        {props.children}
      </FavContext.Provider>
    </AuthContext.Provider>
  );
}

export default AuthProvider;

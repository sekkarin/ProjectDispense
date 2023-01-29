import {createContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({
  isAuthenticate: false,
  authenticate: () => {},
  logout: () => {},
  // userLogin: {},
});

function AuthContextProvider({children}) {
  const [isLogIn, setLogIn] = useState(false);

  async function authenticate(ID) {
    setLogIn(true);
    await AsyncStorage.setItem('IDUSER', ID);
  }
  function logout() {
    setLogIn(false);
    // setUserLogin({});
    AsyncStorage.setItem('IDUSER', '');
  }

  const value = {
    isAuthenticate: isLogIn,
    authenticate: authenticate,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthContextProvider;

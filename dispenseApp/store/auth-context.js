import {createContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({
  isAuthenticate: false,
  authenticate: () => {},
  logout: () => {},
  USERID: '',
  // userLogin: {},
});

function AuthContextProvider({children}) {
  const [isLogIn, setLogIn] = useState(false);
  const [id, setID] = useState(false);

  async function authenticate(ID) {
    setLogIn(true);
    setID(ID);
    await AsyncStorage.setItem('IDUSER', ID);
  }
  function logout() {
    setLogIn(false);
    // setUserLogin({});
    AsyncStorage.setItem('IDUSER', '');
  }
  async function USERID() {
    return await AsyncStorage.getItem('IDUSER');
  }

  const value = {
    isAuthenticate: isLogIn,
    authenticate: authenticate,
    logout: logout,
    USERID: USERID,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthContextProvider;

import {createContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({
  isAuthenticate: false,
  authenticate: () => {},
  logout: () => {},
  userLogin: {},
});

function AuthContextProvider({children}) {
  const [isLogIn, setLogIn] = useState(false);
  const [userLogin, setUserLogin] = useState({});

  async function authenticate(Login) {
    // console.log('autn', Login.id);
    setLogIn(true);
    setUserLogin(Login);
    await AsyncStorage.setItem('IDUSER', Login.id);
  }
  function logout() {
    setLogIn(false);
    setUserLogin({});
    AsyncStorage.setItem('IDUSER', '');
  }

  const value = {
    isAuthenticate: isLogIn, //เช็ค มีโทเค็น และ หมดอายุ หรือ ไหม
    authenticate: authenticate,
    logout: logout,
    userLogin: userLogin,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthContextProvider;

import {createContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({
  isAuthenticate: false,
  authenticate: () => {},
  logout: () => {},
<<<<<<< HEAD
  // userLogin: {},
=======
  userLogin: {},
>>>>>>> 7617b5a (Revert "load login init start app")
});

function AuthContextProvider({children}) {
  const [isLogIn, setLogIn] = useState(false);
<<<<<<< HEAD

  async function authenticate(ID) {
    setLogIn(true);
    await AsyncStorage.setItem('IDUSER', ID);
  }
  function logout() {
    setLogIn(false);
    // setUserLogin({});
=======
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
>>>>>>> 7617b5a (Revert "load login init start app")
    AsyncStorage.setItem('IDUSER', '');
  }

  const value = {
<<<<<<< HEAD
    isAuthenticate: isLogIn,
    authenticate: authenticate,
    logout: logout,
=======
    isAuthenticate: isLogIn, //เช็ค มีโทเค็น และ หมดอายุ หรือ ไหม
    authenticate: authenticate,
    logout: logout,
    userLogin: userLogin,
>>>>>>> 7617b5a (Revert "load login init start app")
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthContextProvider;

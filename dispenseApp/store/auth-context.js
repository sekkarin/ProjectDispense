import {createContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({
  isAuthenticate: false,
  authenticate: () => {},
  logout: () => {},
<<<<<<< HEAD
<<<<<<< HEAD
  // userLogin: {},
=======
  userLogin: {},
>>>>>>> 7617b5a (Revert "load login init start app")
=======
  userLogin: {},
>>>>>>> 246cc6749ac1b6f6e5b7d1303efea0a5e3ebece6
});

function AuthContextProvider({children}) {
  const [isLogIn, setLogIn] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
=======
  const [userLogin, setUserLogin] = useState({});
>>>>>>> 246cc6749ac1b6f6e5b7d1303efea0a5e3ebece6

  async function authenticate(Login) {
    // console.log('autn', Login.id);
    setLogIn(true);
    setUserLogin(Login);
    await AsyncStorage.setItem('IDUSER', Login.id);
  }
  function logout() {
    setLogIn(false);
<<<<<<< HEAD
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
=======
    setUserLogin({});
>>>>>>> 246cc6749ac1b6f6e5b7d1303efea0a5e3ebece6
    AsyncStorage.setItem('IDUSER', '');
  }

  const value = {
<<<<<<< HEAD
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
=======
    isAuthenticate: isLogIn, //เช็ค มีโทเค็น และ หมดอายุ หรือ ไหม
    authenticate: authenticate,
    logout: logout,
    userLogin: userLogin,
>>>>>>> 246cc6749ac1b6f6e5b7d1303efea0a5e3ebece6
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthContextProvider;

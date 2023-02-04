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
  const [id, setID] = useState('');

  async function authenticate(ID) {
    setLogIn(true);
    setID(ID);
    await AsyncStorage.setItem('IDUSER', ID);
  }
  function logout() {
    setLogIn(false);
    setID('');
    // setUserLogin({});
    AsyncStorage.setItem('IDUSER', '');
  }

  const value = {
    isAuthenticate: isLogIn,
    authenticate: authenticate,
    logout: logout,
    USERID: id,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthContextProvider;

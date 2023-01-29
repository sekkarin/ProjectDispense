// npm start -- --reset-cache
<<<<<<< HEAD
import React, {useContext, useEffect, useState} from 'react';
import Navigation from './navigation/Navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AuthContextProvider, {AuthContext} from './store/auth-context';
import LoadingOverlay from './components/UI/LoadingOverlay';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Root() {
  const [isFetch, setIsFecth] = useState(false);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      try {
        setIsFecth(true);
        await AsyncStorage.getItem('IDUSER')
          .then(result => {
            console.log(result);
            authCtx.authenticate(result == null ? '' : result);
            setIsFecth(false);
          })
          .catch(err => {
            const errormsg = 'เกิดข้อผิดพลาด...';
            // console.log('เพิ่ม TOKEN ไม่ได้', err);
            Alert.alert(errormsg);
          });
        setIsFecth(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (isFetch) {
    return <LoadingOverlay message="กำลังเปิดใช้งาน..." />;
  }
  return <Navigation />;
}
=======
import React from 'react';
import Navigation from './navigation/Navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AuthContextProvider from './store/auth-context';
>>>>>>> 7617b5a (Revert "load login init start app")
const App = () => {
  return (
    <SafeAreaProvider>
      <AuthContextProvider>
<<<<<<< HEAD
        <Root />
=======
        <Navigation />
>>>>>>> 7617b5a (Revert "load login init start app")
      </AuthContextProvider>
    </SafeAreaProvider>
  );
};
export default App;

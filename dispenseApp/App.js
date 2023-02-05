// // npm start -- --reset-cache
import React, {useContext, useEffect, useState} from 'react';
import Navigation from './navigation/Navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AuthContextProvider, {AuthContext} from './store/auth-context';
import LoadingOverlay from './components/UI/LoadingOverlay';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import notifee from '@notifee/react-native';
import PushNotification from 'react-native-push-notification';
function Root() {
  const [isFetch, setIsFecth] = useState(false);
  const authCtx = useContext(AuthContext);
  PushNotification.createChannel({
    channelId: 'idtest',
    channelName: 'nametest',
  });

  //ss
  useEffect(() => {
    async function fetchToken() {
      try {
        setIsFecth(true);
        await AsyncStorage.getItem('IDUSER')
          .then(result => {
            // console.log(result);
            authCtx.authenticate(result == null ? '' : result);
            if (!result) {
              authCtx.logout();
              setIsFecth(false);
              return;
            }
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
const App = () => {
  return (
    <SafeAreaProvider>
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </SafeAreaProvider>
  );
};
export default App;
// import * as React from 'react';

// import {StyleSheet, Text} from 'react-native';
// import {useCameraDevices} from 'react-native-vision-camera';
// import {Camera} from 'react-native-vision-camera';
// import {useScanBarcodes, BarcodeFormat} from 'vision-camera-code-scanner';

// export default function App() {
//   const [hasPermission, setHasPermission] = React.useState(false);
//   const devices = useCameraDevices();
//   const device = devices.back;

//   const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
//     checkInverted: true,
//   });

//   // Alternatively you can use the underlying function:
//   //
//   // const frameProcessor = useFrameProcessor((frame) => {
//   //   'worklet';
//   //   const detectedBarcodes = scanBarcodes(frame, [BarcodeFormat.QR_CODE], { checkInverted: true });
//   //   runOnJS(setBarcodes)(detectedBarcodes);
//   // }, []);

//   React.useEffect(() => {
//     (async () => {
//       const status = await Camera.requestCameraPermission();
//       setHasPermission(status === 'authorized');
//     })();
//   }, []);

//   return (
//     device != null &&
//     hasPermission && (
//       <>
//         <Camera
//           style={StyleSheet.absoluteFill}
//           device={device}
//           isActive={true}
//           frameProcessor={frameProcessor}
//           frameProcessorFps={5}
//         />
//         {barcodes.map((barcode, idx) => (
//           <Text key={idx} style={styles.barcodeTextURL}>
//             {barcode.displayValue}
//           </Text>
//         ))}
//       </>
//     )
//   );
// }

// const styles = StyleSheet.create({
//   barcodeTextURL: {
//     fontSize: 20,
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

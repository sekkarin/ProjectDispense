import {Button} from '@rneui/base';
import * as React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {useCameraDevices} from 'react-native-vision-camera';
import {Camera} from 'react-native-vision-camera';
import {useScanBarcodes, BarcodeFormat} from 'vision-camera-code-scanner';

export default function Qrcode({navigation}) {
  const [hasPermission, setHasPermission] = React.useState(false);
  const [camera, setCmera] = React.useState(false);
  const [_device, setdevice] = React.useState(null);
  const devices = useCameraDevices();

  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
    checkInverted: true,
  });

  React.useEffect(() => {
    const focusHandler = navigation.addListener('focus', () => {
      setdevice(null);
    });
    return focusHandler;
  }, [navigation]);

  if (camera) {
    setCmera(false);
    setdevice(devices.back);
  }

  React.useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  return (
    <View style={{height: '80%', width: '100%', flex: 1}}>
      <Button
        title={'สแกน'}
        containerStyle={{
          alignItems: 'stretch',
          alignContent: 'flex-end',
          marginTop: '10%',
        }}
        onPress={() => {
          setCmera(state => {
            if (!state) {
              setdevice(null);
            }
            return !state;
          });
        }}
      />
      {_device != null && hasPermission && (
        <>
          <Camera
            style={StyleSheet.absoluteFill}
            device={_device}
            isActive={true}
            frameProcessor={frameProcessor}
            frameProcessorFps={5}
          />
          {/* {barcodes.map((barcode, idx) => (
          <Text key={idx} style={styles.barcodeTextURL}>
            {barcode.displayValue}
          </Text>
        ))} */}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  barcodeTextURL: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

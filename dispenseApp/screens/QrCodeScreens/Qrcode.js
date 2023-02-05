import {Button} from '@rneui/base';
import {json} from 'express';
import {typeOf} from 'mathjs';
import * as React from 'react';
import {useEffect} from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {useCameraDevices} from 'react-native-vision-camera';
import {Camera} from 'react-native-vision-camera';
import {useScanBarcodes, BarcodeFormat} from 'vision-camera-code-scanner';

export default function Qrcode({navigation}) {
  const [hasPermission, setHasPermission] = React.useState(false);
  const [camera, setCmera] = React.useState(false);
  // const [camera, setCmera] = React.useState(false);
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

  useEffect(() => {
    if (barcodes && barcodes.length > 0) {
      // console.log(barcodes[0].displayValue);
      try {
        const dateQrcode = barcodes[0].displayValue;
        // console.log(typeof dateQrcode, dateQrcode);
        // const qrCodeJson = JSON.stringify(dateQrcode);
        const qrCodeObject = JSON.parse(dateQrcode.replace(/^\s+|\s+$/g, ''));
        // console.log(typeof qrCodeObject, qrCodeObject);
        console.log(qrCodeObject);
        if (
          qrCodeObject.hasOwnProperty('Med_name') &&
          qrCodeObject.hasOwnProperty('Med_type') &&
          qrCodeObject.hasOwnProperty('medRecNotiTime') &&
          qrCodeObject.hasOwnProperty('medRec_startDate') &&
          qrCodeObject.hasOwnProperty('medRec_endDate')
        ) {
          console.log('pass');
          navigation.navigate('AddmedicineQRCode', {medObjec: qrCodeObject});
        } else {
          console.log('not pass');
        }
      } catch (err) {
        console.log(err, 'valivadate date');
      }
      // if
    }
  }, [barcodes]);

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
            // onPointerMoveCapture
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

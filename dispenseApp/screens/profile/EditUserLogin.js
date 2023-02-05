/* eslint-disable react-native/no-inline-styles */
import {Alert, StyleSheet, View} from 'react-native';
import React, {useContext, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Input} from '@rneui/themed';
import {Button, Header, Icon, Text} from '@rneui/base';
import {AuthContext} from '../../store/auth-context';
import LoadingOverlay from '../../components/UI/LoadingOverlay';
import {editUser} from '../../util/editUser';

// TODO:
// [] add forn etc..
// [] add image
// FIXME:
const EditUserLogin = ({navigation}) => {
  const [isFetch, setIsFecth] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [tell, setTell] = useState('');

  const editUserCtx = useContext(AuthContext);

  const sighupHandler = async () => {
    setIsFecth(true);
    // console.log(editUserCtx.USERID);
    await editUser(editUserCtx.USERID, {
      username: username,
      password: password,
      tell: tell,
    });
    setIsFecth(false);
    Alert.alert('แก้ไขสำเร็จ');
    navigation.navigate('ProfileScreen');
  };
  if (isFetch) {
    return <LoadingOverlay />;
  }
  return (
    <View>
      <Header
        containerStyle={{
          height: 120,
          borderRadius: 18,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        ViewComponent={LinearGradient} // Don't forget this!
        linearGradientProps={{
          colors: ['#00B2FF', '#26CFC5'],
          start: {x: 0, y: 2},
          end: {x: 2, y: 0},
        }}
        centerComponent={{
          text: 'แก้ไขข้อมูลส่วนตัว',
          style: styles.heading,
        }}
        leftComponent={
          <Button
            onPress={() => {
              // console.log('HelLo Leave');
              navigation.goBack();
            }}
            buttonStyle={{
              backgroundColor: 'rgba(52, 52, 52, 0.0)',
            }}>
            <Icon name="arrowleft" type="antdesign" color="white" size={32} />
          </Button>
        }
      />
      <View style={styles.container}>
        <View style={styles.border}>
          <View style={styles.bodyForm}>
            <LinearGradient
              style={styles.LinearGratitleForm}
              colors={['#06A8ED', '#09E9F8']}>
              <Text style={styles.textTitleForm}>ข้อมูลเข้าสู่ระบบ</Text>
            </LinearGradient>
          </View>
          {/* TODO: ระยะเวลา */}
          {/* ช่วงเวลา */}
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Input
              placeholder="ชื่อผู้ใช้งาน"
              onChangeText={setUsername}
              containerStyle={styles.containerStyle}
              inputStyle={styles.inputStyle}
              inputContainerStyle={{
                borderColor: '#76DFDE',
                borderWidth: 2,
                borderRadius: 5,
              }}
            />
            {/* <Input
            placeholder="รหัสผ่านเดิม"
            containerStyle={styles.containerStyle}
            inputStyle={styles.inputStyle}
            inputContainerStyle={{
              borderColor: '#76DFDE',
              borderWidth: 2,
              borderRadius: 5,
            }}
          /> */}
            <Input
              placeholder="รหัสผ่านใหม่"
              onChangeText={setPassword}
              containerStyle={styles.containerStyle}
              inputStyle={styles.inputStyle}
              inputContainerStyle={{
                borderColor: '#76DFDE',
                borderWidth: 2,
                borderRadius: 5,
              }}
            />
            {/* <Input
            placeholder="เบอร์โทรศัพท์เดิม"
            containerStyle={styles.containerStyle}
            inputStyle={styles.inputStyle}
            inputContainerStyle={{
              borderColor: '#76DFDE',
              borderWidth: 2,
              borderRadius: 5,
            }}
          /> */}
            <Input
              placeholder="เบอร์โทรศัพท์ใหม่"
              onChangeText={setTell}
              containerStyle={styles.containerStyle}
              inputStyle={styles.inputStyle}
              inputContainerStyle={{
                borderColor: '#76DFDE',
                borderWidth: 2,
                borderRadius: 5,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
              }}
            />
          </View>
          {/* TODO: แก้ไข */}
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Button
                title={'ยกเลิก'}
                ViewComponent={LinearGradient}
                buttonStyle={{
                  borderRadius: 20,
                  marginVertical: 20,
                  width: 120,
                  height: 50,
                }}
                linearGradientProps={{
                  colors: ['#07B5FC', '#7DE2DC'],
                  start: {x: 0, y: 0.5},
                  end: {x: 1, y: 0.5},
                }}
                onPress={() => {
                  navigation.navigate('MainScreen');
                }}
              />
              <Button
                title={'บันทึก'}
                ViewComponent={LinearGradient}
                buttonStyle={{
                  borderRadius: 20,
                  marginVertical: 20,
                  width: 120,
                  height: 50,
                }}
                linearGradientProps={{
                  colors: ['#07B5FC', '#7DE2DC'],
                  start: {x: 0, y: 0.5},
                  end: {x: 1, y: 0.5},
                }}
                onPress={sighupHandler}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EditUserLogin;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    marginVertical: 10,
    height: '80%',
    // flex: 1
  },
  textlable: {
    fontSize: 16,
    color: '#00B2FF',
    fontWeight: 'bold',
  },
  checkbox: {
    backgroundColor: 'transparent',
  },
  textDate: {
    opacity: 0.5,
  },
  heading: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 14,
  },
  textTitleForm: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  LinearGratitleForm: {
    padding: 10,
    width: '70%',
    marginTop: 20,
  },
  bodyForm: {
    marginLeft: 0,
  },
  inputStyle: {
    borderColor: 'black',
    padding: 10,
  },
  containerStyle: {
    width: '90%',
    height: 50,
    marginTop: 15,
  },
  border: {
    borderWidth: 1,
    borderColor: '#00B2FF',
    borderRadius: 10,
  },
});

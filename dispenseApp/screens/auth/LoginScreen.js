/* eslint-disable react/self-closing-comp */
import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {Shadow} from 'react-native-shadow-2'; //https://www.npmjs.com/package/react-native-shadow-2
import LinearGradient from 'react-native-linear-gradient';
import {Input, CheckBox} from '@rneui/themed';
import {Button, Header, Icon, Text} from '@rneui/base';

const LoginScreen = ({navigation}) => {
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  return (
    <View style={styles.container}>
      <Header
        // eslint-disable-next-line react-native/no-inline-styles
        containerStyle={{
          height: 90,
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
          text: 'แจ้งเตือนการบริโภคยา',
          style: styles.heading,
        }}
        leftComponent={
          <Button
            onPress={() => {
              // console.log('HelLo Leave');
              navigation.goBack();
            }}
            // eslint-disable-next-line react-native/no-inline-styles
            buttonStyle={{
              backgroundColor: 'rgba(52, 52, 52, 0.0)',
            }}>
            <Icon name="arrowleft" type="antdesign" color="white" size={32} />
          </Button>
        }
      />
      <View style={styles.gardBody}>
        {/* หัวข้อบนสุด */}
        <Shadow sides={['bottom']} corners={['bottom']} size={[0, 0]}>
          <View style={styles.headerBody}>
            {/* ชื่อไฟล์รูปห้ามมีช่องว่าง */}
            <Image
              source={require('../../assets/images/image2.png')}
              style={styles.image}></Image>
            <Text style={styles.headTitle}>แจ้งเตือนการบริโภคยา</Text>
          </View>
        </Shadow>
        {/* form ข้อมูลต่างๆ */}
        <View style={styles.bodyForm}>
          <LinearGradient
            style={styles.LinearGratitleForm}
            colors={['#06A8ED', '#09E9F8']}>
            <Text style={styles.textTitleForm}>เข้าสู่ระบบด้วยบัญชีของคุณ</Text>
          </LinearGradient>
          <View style={styles.containerInput}>
            <Input
              placeholder="อีเมล์"
              containerStyle={styles.containerStyle}
              inputStyle={styles.inputStyle}
              // eslint-disable-next-line react-native/no-inline-styles
              inputContainerStyle={{
                borderColor: '#76DFDE',
                borderWidth: 2,
                borderRadius: 5,
              }}></Input>
            <Input
              placeholder="รหัสผ่าน"
              containerStyle={styles.containerStyle}
              inputStyle={styles.inputStyle}
              // eslint-disable-next-line react-native/no-inline-styles
              inputContainerStyle={{
                borderColor: '#76DFDE',
                borderWidth: 2,
                borderRadius: 5,
              }}></Input>
          </View>
        </View>
        <CheckBox
          // eslint-disable-next-line react-native/no-inline-styles
          containerStyle={{marginLeft: 50}}
          title="จดจำรหัสผ่านของฉัน"
          checked={checked}
          onPress={toggleCheckbox}
          // Use ThemeProvider to make change for all checkbox
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline"
          checkedColor="#35C5F5"
        />
        {/* ปุ่ม SUMIT */}
        <View style={styles.bodyBotton}>
          <Button
            // eslint-disable-next-line react-native/no-inline-styles
            containerStyle={{
              width: '50%',
              height: 40,
              borderRadius: 25,
            }}
            ViewComponent={LinearGradient} // Don't forget this!
            linearGradientProps={{
              colors: ['#07B5FC', '#7DE2DC'],
              start: {x: 0, y: 0.5},
              end: {x: 1, y: 0.5},
            }}
            onPress={() => {
              navigation.navigate('ManagemMdicine', {screen: 'MainScreen'});
            }}>
            Login
          </Button>
        </View>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Text style={{marginTop: 5, marginBottom: 40}}>
            ลืมรหัสผ่าน{' '}
            <Text
            style={{color:"#35C5F5"}}
              onPress={() => {
                navigation.navigate('LoginForgot');
              }}>
              คลิกที่นี่
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDCDC',
  },
  gardBody: {
    // height: '90%',
    backgroundColor: 'white',
    margin: 30,
    // flex: 1,
    borderRadius: 25,
  },
  headerBody: {
    flexDirection: 'row',
    padding: 10,
    // flexGrow: 1,
    borderRadius: 20,
    height: 110,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 68,
    height: 78,
  },
  headTitle: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  bodyForm: {
    marginTop: 20,
  },
  LinearGratitleForm: {
    padding: 10,
    width: '70%',
    marginTop: 20,
  },
  textTitleForm: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  containerStyle: {
    width: '80%',
    height: 50,
    marginTop: 15,
  },
  inputStyle: {
    borderColor: 'black',
    padding: 10,
  },
  containerInput: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  LinearGratButton: {
    width: '50%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  bodyBotton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 14,
  },
});

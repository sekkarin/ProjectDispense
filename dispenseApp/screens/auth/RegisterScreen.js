/* eslint-disable react/self-closing-comp */
import {Image, StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import {Shadow} from 'react-native-shadow-2'; //https://www.npmjs.com/package/react-native-shadow-2
import LinearGradient from 'react-native-linear-gradient';
import {Input} from '@rneui/themed';
import {Button, Header, Icon, Text} from '@rneui/base';

const RegisterScreen = ({navigation}) => {
  return (
    <ScrollView>
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
            buttonStyle={{
              backgroundColor: 'rgba(52, 52, 52, 0.0)',
            }}>
            <Icon name="arrowleft" type="antdesign" color="white" size={32} />
          </Button>
        }
      />
      <View style={styles.container}>
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
              <Text style={styles.textTitleForm}>ข้อมูลส่วนตัว</Text>
            </LinearGradient>
            <View style={styles.containerInput}>
              <Input
                placeholder="ชื่อ"
                containerStyle={styles.containerStyle}
                inputStyle={styles.inputStyle}
                inputContainerStyle={{
                  borderColor: '#76DFDE',
                  borderWidth: 2,
                  borderRadius: 5,
                }}></Input>
              <Input
                placeholder="นามสกุล"
                containerStyle={styles.containerStyle}
                inputStyle={styles.inputStyle}
                inputContainerStyle={{
                  borderColor: '#76DFDE',
                  borderWidth: 2,
                  borderRadius: 5,
                }}></Input>
              <Input
                placeholder="อายุ (ปี)"
                containerStyle={styles.containerStyle}
                inputStyle={styles.inputStyle}
                inputContainerStyle={{
                  borderColor: '#76DFDE',
                  borderWidth: 2,
                  borderRadius: 5,
                }}></Input>
              <Input
                placeholder="น้ำหนัก (กก.)"
                containerStyle={styles.containerStyle}
                inputStyle={styles.inputStyle}
                inputContainerStyle={{
                  borderColor: '#76DFDE',
                  borderWidth: 2,
                  borderRadius: 5,
                }}></Input>
              <Input
                placeholder="โรคประจำตัว"
                containerStyle={styles.containerStyle}
                inputStyle={styles.inputStyle}
                inputContainerStyle={{
                  borderColor: '#76DFDE',
                  borderWidth: 2,
                  borderRadius: 5,
                }}></Input>
              <Input
                placeholder="ประวัติแพ้ยา"
                containerStyle={styles.containerStyle}
                inputStyle={styles.inputStyle}
                inputContainerStyle={{
                  borderColor: '#76DFDE',
                  borderWidth: 2,
                  borderRadius: 5,
                }}></Input>
            </View>
          </View>
          {/* form ข้อมูลส่วนที่ 2 */}
          <View style={styles.bodyForm}>
            <LinearGradient
              style={styles.LinearGratitleForm}
              colors={['#06A8ED', '#09E9F8']}>
              <Text style={styles.textTitleForm}>ข้อมูลส่วนตัว</Text>
            </LinearGradient>
            <View style={styles.containerInput}>
              <Input
                placeholder="ชื่อผู้ใช้งาน"
                containerStyle={styles.containerStyle}
                inputStyle={styles.inputStyle}
                inputContainerStyle={{
                  borderColor: '#76DFDE',
                  borderWidth: 2,
                  borderRadius: 5,
                }}></Input>
              <Input
                placeholder="รหัสผ่าน"
                containerStyle={styles.containerStyle}
                inputStyle={styles.inputStyle}
                inputContainerStyle={{
                  borderColor: '#76DFDE',
                  borderWidth: 2,
                  borderRadius: 5,
                }}></Input>
              <Input
                placeholder="เบอร์โทรศัพท์"
                containerStyle={styles.containerStyle}
                inputStyle={styles.inputStyle}
                inputContainerStyle={{
                  borderColor: '#76DFDE',
                  borderWidth: 2,
                  borderRadius: 5,
                }}></Input>
            </View>
          </View>
          {/* ปุ่ม SUMIT */}
          <View style={[styles.bodyBotton, {marginBottom: 20, marginTop: 20}]}>
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
              Register
            </Button>
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text style={{marginTop: 5, marginBottom: 20}}>
                หากเป็นสมาชิกอยู่แล้ว{' '}
                <Text
                  style={{color: '#35C5F5'}}
                  onPress={() => {
                    navigation.navigate('LoginScreen');
                  }}>
                  เข้าสู่ระบบ
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDCDC',
  },
  gardBody: {
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
    marginTop: 0,
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

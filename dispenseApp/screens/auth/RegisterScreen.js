/* eslint-disable react/self-closing-comp */
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Shadow} from 'react-native-shadow-2'; //https://www.npmjs.com/package/react-native-shadow-2
import LinearGradient from 'react-native-linear-gradient';
import {Input} from '@rneui/themed';
import {Button} from '@rneui/base';
import {Icon} from '@rneui/themed';

const RegisterScreen = ({navigation}) => {
  return (
    <ScrollView>
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
              Register
            </Button>
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
    height: '90%',
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
    // height: 50,
    // marginVertical: 10,
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
});

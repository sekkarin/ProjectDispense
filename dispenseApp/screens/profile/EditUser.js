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

const EditUser = ({navigation}) => {
  const [isFetch, setIsFecth] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  // โรคประจำตัว
  const [congenitalDisease, setCongenitalDisease] = useState('');
  // แพ้ยา
  const [drugAllergy, setDrugAllergy] = useState('');


  const sighupHandler = () => {
    setIsFecth(true);
    editUser({
      firstName: firstName,
      lastName: lastName,
      age: age,
      weight: weight,
      congenitalDisease: congenitalDisease,
      drugAllergy: drugAllergy,
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
        <View style={styles.bodyForm}>
          <LinearGradient
            style={styles.LinearGratitleForm}
            colors={['#06A8ED', '#09E9F8']}>
            <Text style={styles.textTitleForm}>ข้อมูลส่วนตัว</Text>
          </LinearGradient>
        </View>
        {/* TODO: ระยะเวลา */}
        {/* ช่วงเวลา */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <Icon
            name="person-outline"
            type="Ionicons"
            color="#35C5F5"
            size={32}
            containerStyle={styles.iconStyle}
          />
          <Input
            placeholder="ชื่อ"
            onChangeText={setFirstName}
            containerStyle={styles.containerStyle}
            inputStyle={styles.inputStyle}
            inputContainerStyle={{
              borderColor: '#76DFDE',
              borderWidth: 2,
              borderRadius: 5,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <Icon
            name="person-outline"
            type="Ionicons"
            color="#35C5F5"
            size={32}
            containerStyle={styles.iconStyle}
          />
          <Input
            placeholder="นามสกุล"
            onChangeText={setLastName}
            containerStyle={styles.containerStyle}
            inputStyle={styles.inputStyle}
            inputContainerStyle={{
              borderColor: '#76DFDE',
              borderWidth: 2,
              borderRadius: 5,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingRight: 10,
          }}>
          <Icon
            name="show-chart"
            type="MaterialIcons"
            color="#35C5F5"
            size={32}
            containerStyle={styles.iconStyle}
          />
          <Input
            placeholder="อายุ"
            onChangeText={setAge}
            containerStyle={styles.containerStyle}
            inputStyle={styles.inputStyle}
            inputContainerStyle={{
              borderColor: '#76DFDE',
              borderWidth: 2,
              borderRadius: 5,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Icon
            name="line-weight"
            type="MaterialIcons"
            color="#35C5F5"
            size={32}
            containerStyle={styles.iconStyle}
          />
          <Input
            placeholder="น้ำหนัก"
            onChangeText={setWeight}
            containerStyle={styles.containerStyle}
            inputStyle={styles.inputStyle}
            inputContainerStyle={{
              borderColor: '#76DFDE',
              borderWidth: 2,
              borderRadius: 5,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Icon
            name="heartbeat-alt"
            type="fontisto"
            color="#35C5F5"
            size={32}
            containerStyle={styles.iconStyle}
          />
          <Input
            placeholder="โรคประจำตัว"
            onChangeText={setCongenitalDisease}
            containerStyle={styles.containerStyle}
            inputStyle={styles.inputStyle}
            inputContainerStyle={{
              borderColor: '#76DFDE',
              borderWidth: 2,
              borderRadius: 5,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Icon
            name="pills"
            type="fontisto"
            color="#35C5F5"
            size={32}
            containerStyle={styles.iconStyle}
          />
          <Input
            placeholder="ประวัติแพ้ยา"
            onChangeText={setDrugAllergy}
            containerStyle={styles.containerStyle}
            inputStyle={styles.inputStyle}
            inputContainerStyle={{
              borderColor: '#76DFDE',
              borderWidth: 2,
              borderRadius: 5,
            }}
          />
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
            }}
          />
        </View>
        {/* TODO: บันทึกยา */}
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <Button
              buttonStyle={{
                borderRadius: 20,
                marginVertical: 20,
                width: 120,
                height: 50,
              }}
              title={'ยกเลิก'}
              ViewComponent={LinearGradient}
              linearGradientProps={{
                colors: ['#07B5FC', '#7DE2DC'],
                start: {x: 0, y: 0.5},
                end: {x: 1, y: 0.5},
              }}
              onPress={() => {
                navigation.navigate('ProfileScreen');
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
  );
};

export default EditUser;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#00B2FF',
    borderRadius: 10,
    marginVertical: 10,
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
    marginTop: 0,
    marginLeft: -10,
  },
  inputStyle: {
    borderColor: 'black',
    padding: 10,
  },
  containerStyle: {
    width: 320,
    height: 50,
    marginTop: 15,
  },
  iconStyle: {
    marginTop: 20,
  },
});

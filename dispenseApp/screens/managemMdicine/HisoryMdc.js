/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View, ScrollView} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {Button, Header, Icon, Image, Text} from '@rneui/base';
import LinearGradient from 'react-native-linear-gradient';
import {AuthContext} from '../../store/auth-context';
import {getMedicineById, getMedRecord} from '../../util/medicine';
import LoadingOverlay from '../../components/UI/LoadingOverlay';
import EmptyData from '../../components/UI/EmptyData';
import {FlatList} from 'react-native';

// TODO:
// [] add forn etc..
// [] add image
// FIXME:

const HisoryMdc = ({navigation}) => {
  const [isFetch, setIsFecth] = useState(false);
  const [medicines, setMedicines] = React.useState([]);
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    async function getmed() {
      setIsFecth(true);
      const user_id = authCtx.USERID;
      const respone = await getMedRecord();
      // console.log('respone', respone.data);
      const medreds = respone.data;
      setMedicines([]);
      for (const key in medreds) {
        if (Object.hasOwnProperty.call(medreds, key)) {
          const element = medreds[key];
          const medRec_getTime = element.medRec_getTime;
          // console.log(element.medRec_getTime.length);
          if (element.user_id === user_id && medRec_getTime.length > 0) {
            // element.medRec_id = key;
            Object.assign(element, {medRec_id: key});
            // console.log(element);
            const res = await getMedicineById(element.med_id);
            setMedicines(currdate => [
              ...currdate,
              {med: res.data, medRec: element},
            ]);
          }
        }
      }
      setIsFecth(false);
    }
    const focusHandler = navigation.addListener('focus', () => {
      getmed();
    });
    return focusHandler;
  }, [authCtx.USERID, navigation]);
  if (isFetch) {
    return <LoadingOverlay />;
  }
  return (
    <View>
      <Header
        containerStyle={{
          height: 110,
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
          text: 'ประวัติบริหารยา',
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

      {/* list */}
      {medicines.length > 0 ? (
        // <ScrollView style={{height: '83%', marginBottom: 5}}>
        <FlatList
          style={{height: '80%', marginBottom: 5, marginTop: 5}}
          data={medicines}
          renderItem={({item}) => {
            // console.log(item);
            return (
              <View>
                <Button
                  buttonStyle={{
                    borderRadius: 10,
                    marginHorizontal: 5,
                    borderWidth: 1,
                    borderColor: '#00B2FF',
                    marginTop: 10,
                  }}
                  // onPress={() => {
                  //   navigation.navigate('ProfileScreen');
                  // }}
                  ViewComponent={LinearGradient}
                  linearGradientProps={{
                    colors: ['#fff', '#fff'],
                    start: {x: 0, y: 0.5},
                    end: {x: 1, y: 0.5},
                  }}>
                  <View
                    style={{flexDirection: 'row', width: '70%', height: 200}}>
                    <Image
                      source={{
                        uri:
                          item.medRec.image_url === ''
                            ? 'https://img.freepik.com/free-vector/isometric-gastroenterology-composition-with-view-medication-with-tubes-pills-illustration_1284-63536.jpg?w=2000'
                            : item.medRec.image_url,
                      }}
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                        marginVertical: 50,
                      }}
                    />
                    <View
                      style={{
                        flexDirection: 'column',
                        marginLeft: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text style={{fontSize: 16, color: 'blue'}}>
                        {item.med.Med_name}
                      </Text>
                      <Text style={{fontSize: 12}}>
                        {'\n'} จำนวนที่ต้องรับ : {item.medRec.medRec_dose} เม็ด{' '}
                      </Text>
                    </View>
                  </View>
                </Button>
              </View>
            );
          }}
        />
      ) : (
        // </ScrollView>
        <EmptyData message={'ไม่มีรายการ'} />
      )}
    </View>
  );
};
export default HisoryMdc;

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
});

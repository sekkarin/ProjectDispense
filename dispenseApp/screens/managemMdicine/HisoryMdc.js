/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View, ScrollView, Pressable} from 'react-native';
import React from 'react';
import {Button, Header, Icon, Image, Text} from '@rneui/base';
import LinearGradient from 'react-native-linear-gradient';
import {Input} from '@rneui/themed';

// TODO:
// [] add forn etc..
// [] add image
// FIXME:

const HisoryMdc = ({navigation}) => {
  return (
    <ScrollView>
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
        <View>
          <Button
            buttonStyle={{
              borderRadius: 10,
              marginHorizontal: 5,
              borderWidth: 1,
              borderColor: '#00B2FF',
              marginTop: 10,
            }}
            onPress={() => {
              navigation.navigate('ProfileScreen');
            }}
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ['#fff', '#fff'],
              start: {x: 0, y: 0.5},
              end: {x: 1, y: 0.5},
            }}>
            <View style={{flexDirection: 'row', width: '70%', height: 200}}>
              <Image
                source={{
                  uri: 'https://medthai.com/wp-content/uploads/2016/11/%E0%B8%8B%E0%B8%B5%E0%B8%A1%E0%B8%AD%E0%B8%A5.jpg',
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
                  {' '}
                  เมทฟอร์มิน {'\n'} ( Metformin )
                </Text>
                <Text style={{fontSize: 12}}>
                  {'\n'} จำนวนที่ต้องรับ : 1 เม็ด{' '}
                </Text>
              </View>
            </View>
          </Button>
        </View>
        {/* list */}
        <View>
          <Button
            buttonStyle={{
              borderRadius: 10,
              marginHorizontal: 5,
              borderWidth: 1,
              borderColor: '#00B2FF',
              marginTop: 10,
            }}
            onPress={() => {
              navigation.navigate('ProfileScreen');
            }}
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ['#fff', '#fff'],
              start: {x: 0, y: 0.5},
              end: {x: 1, y: 0.5},
            }}>
            <View style={{flexDirection: 'row', width: '70%', height: 200}}>
              <Image
                source={{
                  uri: 'https://medthai.com/wp-content/uploads/2016/11/%E0%B8%8B%E0%B8%B5%E0%B8%A1%E0%B8%AD%E0%B8%A5.jpg',
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
                  {' '}
                  เมทฟอร์มิน {'\n'} ( Metformin )
                </Text>
                <Text style={{fontSize: 12}}>
                  {'\n'} จำนวนที่ต้องรับ : 1 เม็ด{' '}
                </Text>
              </View>
            </View>
          </Button>
        </View>
        {/* list */}
        <View>
          <Button
            buttonStyle={{
              borderRadius: 10,
              marginHorizontal: 5,
              borderWidth: 1,
              borderColor: '#00B2FF',
              marginTop: 10,
            }}
            onPress={() => {
              navigation.navigate('ProfileScreen');
            }}
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ['#fff', '#fff'],
              start: {x: 0, y: 0.5},
              end: {x: 1, y: 0.5},
            }}>
            <View style={{flexDirection: 'row', width: '70%', height: 200}}>
              <Image
                source={{
                  uri: 'https://medthai.com/wp-content/uploads/2016/11/%E0%B8%8B%E0%B8%B5%E0%B8%A1%E0%B8%AD%E0%B8%A5.jpg',
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
                  {' '}
                  เมทฟอร์มิน {'\n'} ( Metformin )
                </Text>
                <Text style={{fontSize: 12}}>
                  {'\n'} จำนวนที่ต้องรับ : 1 เม็ด{' '}
                </Text>
              </View>
            </View>
          </Button>
        </View>
      </View>
    </ScrollView>
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

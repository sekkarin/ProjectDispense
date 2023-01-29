import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
<<<<<<< HEAD
import {Button, Header, Icon, Image, Text} from '@rneui/base';
import LinearGradient from 'react-native-linear-gradient';
<<<<<<< HEAD
=======
=======
>>>>>>> parent of 6880d4c (Edit)
>>>>>>> a0bc776 (fix git)

const HisoryMdc = () => {
  return (
<<<<<<< HEAD
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
=======
    <View>
      <Text>HisoryMdc</Text>
    </View>
>>>>>>> a0bc776 (fix git)
  );
};
export default HisoryMdc;

const styles = StyleSheet.create({});

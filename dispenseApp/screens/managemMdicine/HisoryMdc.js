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
        <View style={styles.container}>
          <View style={{paddingVertical: 30, paddingHorizontal: 30}}>
            <View style={{flexDirection: 'row', width: 100, height: 100}}>
              <Image
                source={{
                  uri: 'https://medthai.com/wp-content/uploads/2016/11/%E0%B8%8B%E0%B8%B5%E0%B8%A1%E0%B8%AD%E0%B8%A5.jpg',
                }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  marginRight: 30,
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  width: 200,
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
          </View>
        </View>
        {/* list */}
        <View style={styles.container}>
          <View style={{paddingVertical: 30, paddingHorizontal: 30}}>
            <View style={{flexDirection: 'row', width: 100, height: 100}}>
              <Image
                source={{
                  uri: 'https://medthai.com/wp-content/uploads/2016/11/%E0%B8%8B%E0%B8%B5%E0%B8%A1%E0%B8%AD%E0%B8%A5.jpg',
                }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  marginRight: 30,
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  width: 200,
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
          </View>
        </View>
        {/* list */}
        <View style={styles.container}>
          <View style={{paddingVertical: 30, paddingHorizontal: 30}}>
            <View style={{flexDirection: 'row', width: 100, height: 100}}>
              <Image
                source={{
                  uri: 'https://medthai.com/wp-content/uploads/2016/11/%E0%B8%8B%E0%B8%B5%E0%B8%A1%E0%B8%AD%E0%B8%A5.jpg',
                }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  marginRight: 30,
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  width: 200,
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
          </View>
        </View>
        {/* list */}
        <View style={styles.container}>
          <View style={{paddingVertical: 30, paddingHorizontal: 30}}>
            <View style={{flexDirection: 'row', width: 100, height: 100}}>
              <Image
                source={{
                  uri: 'https://medthai.com/wp-content/uploads/2016/11/%E0%B8%8B%E0%B8%B5%E0%B8%A1%E0%B8%AD%E0%B8%A5.jpg',
                }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  marginRight: 30,
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  width: 200,
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
          </View>
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

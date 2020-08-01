import React from 'react';
import {Component} from 'react';
import {
  StyleSheet,
  Text,
  StatusBar,
  View,
  ScrollView,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from '../components/header';
const headerbasket = [
  {
    text: 'Review Basket',
    color: '#689f39',
    name: 'menu',
  },
];
export default class basket extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="#87BE56" barStyle="light-content" />

        <SafeAreaView
          style={{
            backgroundColor: 'white',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}>
          <View>
            <Header data={headerbasket} />
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 80,
              alignItems: 'center',
              backgroundColor: 'white',
            }}>
            <Image
              resizeMode="contain"
              style={{height: 200, width: 200, borderRadius: 60}}
              source={require('../../assets/basket/cart1.1.jpeg')}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#4a4a4a',
                marginTop: 40,
              }}>
              Your basket is empty
            </Text>
            <Text
              style={{
                paddingHorizontal: 30,
                color: '#8f8f8f',
                marginTop: 10,
              }}>
              Explore our ever growing selection of products
            </Text>
            <Text style={{color: '#8f8f8f'}}>
              and exciting new offers today!
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'white',
                  backgroundColor: '#87BE56',
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  marginTop: 30,
                  fontWeight: 'bold',
                  fontSize: 16,
                  borderRadius: 5,
                }}>
                START SHOPPING
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

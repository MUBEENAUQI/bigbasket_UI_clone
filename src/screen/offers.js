import React from 'react';
import {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Header from '../components/header';
const headeroffer = [
  {
    text: 'Offers',
    color: '#689f39',
    name: 'menu',
  },
];

export default class Offers extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="#87BE56" barStyle="light-content" />
        <View
          style={{
            backgroundColor: 'white',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}>
          <View style={{}}>
            <Header data={headeroffer} />
          </View>
          <View style={styles.container}>
            <Text style={{fontSize: 20, marginTop: -350}}>
              Currently no offers are aviliable
            </Text>
            <TouchableOpacity>
              <Text style={styles.text}>START SHOPPING</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 300,
  },
  text: {
    color: 'white',
    backgroundColor: '#87BE56',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
    borderRadius: 5,
  },
});

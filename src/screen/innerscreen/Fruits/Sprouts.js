import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
export default function (props) {
  const navigation = useNavigation();

  return <Sprouts {...props} navigation={navigation} />;
}
const horizontalscroll = [
  {scrolltext: 'cut Fruits,Tender coconut'},
  {scrolltext: 'Cut & Peeled Veggies'},
  {scrolltext: 'Fresh Salads & sprouts'},
  {scrolltext: 'Recipe packs'},
];
const vegimages = [
  {
    image: require('../../../../assets/images/sprouts/ab.jpg'),
    vegname: 'Sprouts-Mixed Gram',
    kg: '200 g',
    mrp: 'Rs 33.75',
    actmrp: 'Rs 27',
  },

  {
    image: require('../../../../assets/images/exotic/corn.jpg'),
    vegname: 'Garlic Peeled',
    kg: '100 g-Multipack',
    mrp: 'Rs 138.75',
    actmrp: 'Rs 111',
  },
  {
    image: require('../../../../assets/images/sprouts/co.jpg'),
    vegname: 'Baby Corn-Peeled',
    kg: '250 g',
    mrp: 'Rs 51.25',
    actmrp: 'Rs 41',
  },

  {
    image: require('../../../../assets/images/sprouts/ten.jpg'),
    vegname: 'Tender Coconut-Medium',
    kg: '1PC',
    mrp: 'Rs46.25',
    actmrp: 'Rs 37',
  },
  {
    image: require('../../../../assets/images/sprouts/tend.jpg'),
    vegname: 'Tender Coconut-Small',
    kg: '1 PC',
    mrp: 'Rs 45',
    actmrp: 'Rs 36',
  },
];

import Scroll from '../../../components/innerscreens/Scroll';
import Display from '../../../components/innerscreens/DisplayList';
import Contentheader from '../../../components/innerscreens/Contentheader';

class Sprouts extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Contentheader />
        <View style={styles.headertwo}>
          <Text>CUTS & SPROUTS</Text>
        </View>
        <View style={{width: '100%', backgroundColor: '#D7ECC5'}}>
          <ScrollView horizontal={true} style={styles.scrollview}>
            <Scroll data={horizontalscroll}></Scroll>
          </ScrollView>
        </View>

        <View style={styles.filter}>
          <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
            <View style={styles.filtericon}>
              <Ionicons
                style={{fontSize: 25}}
                name="options-outline"></Ionicons>
              <Text>Filter</Text>
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.displaybox}>
          <Display data={vegimages}></Display>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#689f39',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headertwo: {
    backgroundColor: 'white',
    height: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },

  scrollview: {
    height: 50,
    width: Dimensions.get('window').width,
  },
  filter: {
    height: 40,
    width: Dimensions.get('window').width,
    backgroundColor: '#E7ECC4',
    paddingLeft: 326,
    justifyContent: 'center',
  },
  filtericon: {
    height: 35,
    width: 80,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  displaybox: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: '#D7ECC5',
  },
});

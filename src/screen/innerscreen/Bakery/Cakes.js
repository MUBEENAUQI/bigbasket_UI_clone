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

const horizontalscroll = [
  {scrolltext: 'Tea Cakes & Slice Cakes'},
  {scrolltext: 'Muffins & Cup Cakes'},
  {scrolltext: 'Birthday & Party Cakes'},
  {scrolltext: 'Pastries & Brownies'},
];

const displaylist = [
  {
    image: require('../../../../assets/images/Bakery/cakes/one.jpg'),
    brand: 'FRESHO SIGNATURE',
    name: 'Fruit Tea Cake',
    star: ' ',
    rating: ' ',
    kg: '200 g ',
    mrp: ' ',
    actmrp: 'Rs 175',
  },
  {
    image: require('../../../../assets/images/Bakery/cakes/two.jpg'),
    brand: 'FRESHO SIGNATURE',
    name: 'Tea Cake - Banana Walnut',
    star: ' ',
    rating: ' ',
    kg: '200 g  ',
    mrp: ' ',
    actmrp: 'Rs 159 ',
  },

  {
    image: require('../../../../assets/images/Bakery/cakes/three.jpg'),
    brand: 'BRITANNIA',
    name: 'Fruit Cake',
    star: ' ',
    rating: ' ',
    kg: '120 g',
    mrp: ' ',
    actmrp: 'Rs 20.10',
  },

  {
    image: require('../../../../assets/images/Bakery/cakes/four.jpg'),
    brand: 'FRESHO SIGNATURE',
    name: 'Marble Tea Cake',
    star: ' ',
    rating: ' ',
    kg: '250 g ',
    mrp: ' ',
    actmrp: 'Rs 159',
  },

  {
    image: require('../../../../assets/images/Bakery/cakes/one.jpg'),
    brand: 'FRESHO SIGNATURE',
    name: ' Choco Chip Tea Cake',
    star: ' ',
    rating: ' ',
    kg: '250 g',
    mrp: '    ',
    actmrp: 'Rs 159',
  },
  {
    image: require('../../../../assets/images/Bakery/paneer/one.jpg'),
    brand: 'MOTHER DAIRY',
    name: 'Misti Doi',
    star: '4.1',
    rating: '1350 Ratings',
    kg: '85 g -  Cup',
    mrp: '22.50',
    actmrp: 'Rs 20',
  },
];

import Scroll from '../../../components/innerscreens/Scroll';

import BakerDisplay from '../../../components/innerscreens/BakerDisplay';
import Contentheader from '../../../components/innerscreens/Contentheader';

import {useNavigation} from '@react-navigation/native';
export default function (props) {
  const navigation = useNavigation();

  return <Cake {...props} navigation={navigation} />;
}

class Cake extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Contentheader />
        <View style={styles.headertwo}>
          <Text>CAKES & PASTRIES</Text>
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
          <BakerDisplay data={displaylist}></BakerDisplay>
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
    paddingLeft: 270,
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

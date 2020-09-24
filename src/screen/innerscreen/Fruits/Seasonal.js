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
  {scrolltext: 'Mangoes'},
  {scrolltext: 'Kiwi,Melcon  Fruit'},
  {scrolltext: 'Apples & Pomegranate'},
  {scrolltext: 'Banana,Sapota & Papaya'},
  {scrolltext: 'Seasonal Fruits'},
];
const vegimages = [
  {
    image: require('../../../../assets/images/fruits/coco.jpg'),
    vegname: 'Coconut - Medium',
    kg: '1 PC',
    mrp: 'Rs 31.25',
    actmrp: 'Rs 25',
  },
  {
    image: require('../../../../assets/images/fruits/tender.jpg'),
    vegname: 'Tender Coconut -Medium',
    kg: '1 PC',
    mrp: 'Rs 46.25',
    actmrp: 'Rs 37',
  },
  {
    image: require('../../../../assets/images/fruits/pome.jpg'),
    vegname: 'pomegranate',
    kg: '4 PCS-(approx.800 to ..)',
    mrp: 'Rs 161.25',
    actmrp: 'Rs 129',
  },
  {
    image: require('../../../../assets/images/fruits/watermelon.jpg'),
    vegname: 'Watermelon-Small',
    kg: '1 PC-1.7 -2.5 kg',
    mrp: 'Rs 36.25',
    actmrp: 'Rs 16.80',
  },

  {
    image: require('../../../../assets/images/fruits/apple.jpg'),
    vegname: 'Apple-Red Delicious/Washington-Regular',
    kg: '$PC',
    mrp: 'Rs 206.25',
    actmrp: 'Rs 165',
  },
];

import Scroll from '../../../components/innerscreens/Scroll';
import Display from '../../../components/innerscreens/DisplayList';
import Contentheader from '../../../components/innerscreens/Contentheader';
import {useNavigation} from '@react-navigation/native';
export default function (props) {
  const navigation = useNavigation();

  return <Seasonal {...props} navigation={navigation} />;
}
class Seasonal extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Contentheader />
        <View style={styles.headertwo}>
          <Text>FRESH FRUITS</Text>
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

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
  {scrolltext: 'Toor,Channa & Moong Dal'},
  {scrolltext: 'Urad & Other Dals'},
  {scrolltext: 'Cereals & Millets'},
];

const displaylist = [
  {
    image: require('../../../../assets/images/food/dal/one.jpg'),
    brand: 'BB ROYAL',
    name: 'Toor Dal/Arhar Dal-Desi',
    star: '4',
    rating: '8526 Rating',
    kg: '1 kg-Pouch',
    mrp: '170',
    actmrp: 'Rs 128',
  },
  {
    image: require('../../../../assets/images/food/dal/two.jpg'),
    brand: 'BB POPULAR',
    name: 'Peanuts/Mungahali/Shengdana-Raw',
    star: '3.9',
    rating: '63521 Rating',
    kg: '1 kg - Pouch',
    mrp: '220',
    actmrp: 'Rs 125',
  },

  {
    image: require('../../../../assets/images/food/dal/four.jpg'),
    brand: 'BB POPULAR',
    name: 'Moong Dal',
    star: '4.1',
    rating: '11248 Rating',
    kg: '2 kg-Pouch',
    mrp: '380',
    actmrp: 'Rs 270',
  },

  {
    image: require('../../../../assets/images/food/dal/three.jpg'),
    brand: 'BB ROYAL',
    name: 'Moong Dal',
    star: '4.1',
    rating: '6929 Rating',
    kg: '1kg -pouch',
    mrp: '200',
    actmrp: 'Rs 155',
  },

  {
    image: require('../../../../assets/images/food/dal/one.jpg'),
    brand: 'BB POPULAR',
    name: 'Toor/Arhar Dal',
    star: '4',
    rating: '308 Rating',
    kg: '5kg -pouch',
    mrp: '399',
    actmrp: 'Rs 275',
  },
  {
    image: require('../../../../assets/images/food/dal/one.jpg'),
    brand: 'BB ROYAL',
    name: 'Toor Dal/Arhar Dal-Desi',
    star: '4',
    rating: '8526 Rating',
    kg: '1 kg-Pouch',
    mrp: '170',
    actmrp: 'Rs 128',
  },
];

import Scroll from '../../../components/innerscreens/Scroll';

import BakerDisplay from '../../../components/innerscreens/BakerDisplay';
import Contentheader from '../../../components/innerscreens/Contentheader';

import {useNavigation} from '@react-navigation/native';
export default function (props) {
  const navigation = useNavigation();

  return <Dals {...props} navigation={navigation} />;
}

class Dals extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Contentheader />
        <View style={styles.headertwo}>
          <Text>DALS & PULSES</Text>
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

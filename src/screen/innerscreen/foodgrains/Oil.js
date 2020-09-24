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
  {scrolltext: 'Blended Cooking Oils'},
  {scrolltext: 'Soya & Mustard Oils'},
  {scrolltext: 'Ghee & Vanaspati'},
  {scrolltext: 'Sunflower,Rice Bran Oil,Gingelly Oil'},
  {scrolltext: 'Olive & Canola Oils'},
  {scrolltext: 'Other Edible Oils'},
];
const displaylist = [
  {
    image: require('../../../../assets/images/food/Oil/fortune.jpg'),
    brand: 'FORTUNE',
    name: 'Refined Oil-Rice Bran',
    star: '4.2',
    rating: '1780 Ratings',
    kg: '5 L -Can',
    mrp: 'Rs 700',
    actmrp: 'Rs 599',
  },
  {
    image: require('../../../../assets/images/food/Oil/sunflower.jpg'),
    brand: 'FORTUNE',
    name: 'Sunflower Refined  Oil',
    star: '4.1',
    rating: '15591 Ratings',
    kg: '1L -Pouch',
    mrp: 'Rs 130',
    actmrp: 'Rs 109',
  },

  {
    image: require('../../../../assets/images/food/Oil/cowghee.jpg'),
    brand: 'NANDINI',
    name: 'Poor Cow Ghee',
    star: '4.1',
    rating: '4284 Ratings',
    kg: '1L -Pouch',
    mrp: 'Rs 470',
    actmrp: 'Rs 465',
  },

  {
    image: require('../../../../assets/images/food/Oil/saffola.jpg'),
    brand: 'SAFFOLA',
    name: 'Gold-Pro Healthy Lifestyle Edible Oil',
    star: '4.2',
    rating: '5967 Ratings',
    kg: '1L -Pouch',
    mrp: 'Rs 159',
    actmrp: 'Rs 132',
  },
  {
    image: require('../../../../assets/images/food/Oil/idhayam.jpg'),
    brand: 'IDHAYAM',
    name: 'Oil-Gingelly',
    star: '4.2',
    rating: ' 2525 Ratings',
    kg: '500 ml-Pouch',
    mrp: 'Rs 182',
    actmrp: 'Rs 181',
  },
  {
    image: require('../../../../assets/images/food/Oil/saffola.jpg'),
    brand: 'SAFFOLA',
    name: 'Gold-Pro Healthy Lifestyle Edible Oil',
    star: '4.2',
    rating: '5967 Ratings',
    kg: '1L -Pouch',
    mrp: 'Rs 159',
    actmrp: 'Rs 132',
  },
  {
    image: require('../../../../assets/images/food/Oil/idhayam.jpg'),
    brand: 'IDHAYAM',
    name: 'Oil-Gingelly',
    star: '4.2',
    rating: ' 2525 Ratings',
    kg: '500 ml-Pouch',
    mrp: 'Rs 182',
    actmrp: 'Rs 181',
  },
];
import Scroll from '../../../components/innerscreens/Scroll';

import Contentheader from '../../../components/innerscreens/Contentheader';

import BakerDisplay from '../../../components/innerscreens/BakerDisplay';

import {useNavigation} from '@react-navigation/native';
export default function (props) {
  const navigation = useNavigation();

  return <Oil {...props} navigation={navigation} />;
}
class Oil extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Contentheader />
        <View style={styles.headertwo}>
          <Text>EDIBLE OIL & GHEE</Text>
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

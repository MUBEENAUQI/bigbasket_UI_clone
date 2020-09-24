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

  return <Fruitall {...props} navigation={navigation} />;
}
const horizontalscroll = [
  {scrolltext: 'Fresh Vegetables'},
  {scrolltext: 'Herbs & Seasoning'},
  {scrolltext: 'French fruits'},
  {scrolltext: 'Exotic Fruits & Veggies'},
  {scrolltext: 'Organic Fruits & Vegetables'},
  {scrolltext: 'Cuts & Sprouts'},
  {scrolltext: 'Flowers Bouquets,Bun..'},
];

const displaylist = [
  {
    image: require('../../../../assets/images/fruits/banana.jpg'),

    vegname: 'Tomato-local,organically Grown',
    kg: '500 g',
    mrp: 'Rs 27.50',
    actmrp: 'Rs 22',
  },
  {
    image: require('../../../../assets/images/fruits/tender.jpg'),
    vegname: 'Ginger-Organically Grown',
    kg: '100 g',
    mrp: 'Rs 20',
    actmrp: 'Rs 16',
  },

  {
    image: require('../../../../assets/images/vegImage/oni.jpg'),
    vegname: 'ONION',
    kg: '1 kg',
    mrp: 'Rs 30',
    actmrp: 'Rs 19',
  },

  {
    image: require('../../../../assets/images/vegImage/carr.jpg'),
    vegname: 'CARROT-LOCAL',
    kg: '250 g',
    mrp: 'Rs 17.50',
    actmrp: 'Rs 14',
  },
  {
    image: require('../../../../assets/images/vegImage/lf.jpg'),
    vegname: 'LADIES-FINGER',
    kg: '500 g',
    mrp: 'Rs 20',
    actmrp: 'Rs 16',
  },

  {
    image: require('../../../../assets/images/vegImage/sp.jpg'),
    vegname: 'PALAK',
    kg: '100 g',
    mrp: 'Rs 10',
    actmrp: 'Rs 8',
  },
];

import Scroll from '../../../components/innerscreens/Scroll';
import Display from '../../../components/innerscreens/DisplayList';
import Contentheader from '../../../components/innerscreens/Contentheader';

class Fruitall extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <StatusBar
          backgroundColor="#7CB944"
          barStyle="dark-content"></StatusBar>
        <View style={styles.header}>
          <EvilIcons
            style={{fontSize: 35, color: 'white', marginTop: 20, marginLeft: 5}}
            name="navicon"></EvilIcons>
          <Text style={{fontSize: 18, color: 'white', marginTop: 10}}>
            bigbaket
          </Text>
          <EvilIcons
            style={{fontSize: 35, color: 'white', marginTop: 20}}
            name="search"></EvilIcons>
        </View>
        <View style={styles.headertwo}>
          <Text>FRUITS & VEGETABLES</Text>
        </View>

        <View>
          <ScrollView horizontal={true} style={styles.hscrollview}>
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
          <Display data={displaylist}></Display>
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

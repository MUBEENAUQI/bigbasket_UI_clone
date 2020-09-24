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
  {scrolltext: 'Organic Vegetables'},
  {scrolltext: 'Organic Fruits'},
  {scrolltext: 'Organic Fruit & vegetables'},
];
const vegimages = [
  {
    image: require('../../../../assets/images/fruits/banana.jpg'),
    vegname: 'Tomato-local,organically Grown',
    kg: '500 g',
    mrp: 'Rs 27.50',
    actmrp: 'Rs 22',
  },
  {
    image: require('../../../../assets/images/fruits/coco.jpg'),
    vegname: 'Onion-Organically Grown',
    kg: '1 kg',
    mrp: 'Rs 28.75',
    actmrp: 'Rs 23',
  },
  {
    image: require('../../../../assets/images/fruits/tender.jpg'),
    vegname: 'Ginger-Organically Grown',
    kg: '100 g',
    mrp: 'Rs 20',
    actmrp: 'Rs 16',
  },
  {
    image: require('../../../../assets/images/fruits/pome.jpg'),
    vegname: 'Chilly-Green,Organically Grown',
    kg: '100 g',
    mrp: 'Rs 10',
    actmrp: 'Rs 8',
  },

  {
    image: require('../../../../assets/images/fruits/watermelon.jpg'),
    vegname: 'Coconut-Organically Grown',
    kg: '1 PC',
    mrp: 'Rs 36.25',
    actmrp: 'Rs 29',
  },
];

import Scroll from '../../../components/innerscreens/Scroll';
import Display from '../../../components/innerscreens/DisplayList';
import Contentheader from '../../../components/innerscreens/Contentheader';
import {useNavigation} from '@react-navigation/native';
export default function (props) {
  const navigation = useNavigation();

  return <Organics {...props} navigation={navigation} />;
}
class Organics extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Contentheader />
        <View style={styles.headertwo}>
          <Text>ORGANIC FRUITS & VEGETABLES</Text>
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

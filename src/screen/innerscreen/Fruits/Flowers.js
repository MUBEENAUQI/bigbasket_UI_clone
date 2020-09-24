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

  return <Flower {...props} navigation={navigation} />;
}
const horizontalscroll = [
  {scrolltext: 'Marigold'},
  {scrolltext: 'Other Flowers'},
  {scrolltext: 'Roses'},
];
const vegimages = [
  {
    image: require('../../../../assets/images/flower/rose.jpg'),
    vegname: 'Cut Roses',
    kg: '250 g',
    mrp: 'Rs 87.50',
    actmrp: 'Rs 70',
  },
  {
    image: require('../../../../assets/images/flower/maryg.jpg'),
    vegname: 'Marigold-Orange',
    kg: '100 g',
    mrp: 'Rs 25',
    actmrp: 'Rs 20',
  },
  {
    image: require('../../../../assets/images/flower/jam.jpg'),
    vegname: 'Chrysanthemum(Shevanti)',
    kg: '250 g',
    mrp: 'Rs 70',
    actmrp: 'Rs 56',
  },
  {
    image: require('../../../../assets/images/flower/banleaf.jpg'),
    vegname: 'Banana Leaf',
    kg: '5 PCS',
    mrp: 'Rs 22.70',
    actmrp: 'Rs 22',
  },

  {
    image: require('../../../../assets/images/flower/yellow.jpg'),
    vegname: 'Marigold-Yellow',
    kg: '250 g',
    mrp: 'Rs 42.50',
    actmrp: 'Rs 34',
  },
];

import Scroll from '../../../components/innerscreens/Scroll';

import Display from '../../../components/innerscreens/DisplayList';
import Contentheader from '../../../components/innerscreens/Contentheader';

class Flower extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Contentheader />
        <View style={styles.headertwo}>
          <Text>FLOWER BOUQUETS, BUNCHES</Text>
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

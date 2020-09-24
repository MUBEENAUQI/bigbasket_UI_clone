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
  {scrolltext: 'Atta,Flours & Sooji'},
  {scrolltext: 'Dals& Pulses'},
  {scrolltext: 'Rice & Rice Products'},
  {scrolltext: 'Organic Staples'},
  {scrolltext: 'Salt,Sugar & Jaggey'},
  {scrolltext: 'Edible Oils & Ghee'},
];

const displaylist = [
  {
    image: require('../../../../assets/images/food/salt/one.jpg'),
    brand: 'BB ROYAL',
    name: 'Sugar',
    star: '4.1',
    rating: '13292 Rating',
    kg: '2 kg',
    mrp: '120',
    actmrp: 'Rs 95',
  },
  {
    image: require('../../../../assets/images/food/masala/four.jpg'),
    brand: 'BB ROYAL',
    name: 'Turmeric/Haldi -Powder',
    star: '4.1',
    rating: '1856 Rating',
    kg: '100g',
    mrp: '30',
    actmrp: 'Rs 21',
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

  {
    image: require('../../../../assets/images/food/besan20.jpg'),
    type: 'BB RECOMMENDS',
    brand: 'BB ROYAL',
    name: 'Sooji Ordinary/Bombay Rava',
    star: '4.1',
    rating: ' 5694Ratings',
    kg: '1 kg-Pouch',
    mrp: 'Rs 60',
    actmrp: 'Rs 48',
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

  {
    image: require('../../../../assets/images/food/besan20.jpg'),
    type: 'BB RECOMMENDS',
    brand: 'BB ROYAL',
    name: 'Sooji Ordinary/Bombay Rava',
    star: '4.1',
    rating: ' 5694Ratings',
    kg: '1 kg-Pouch',
    mrp: 'Rs 60',
    actmrp: 'Rs 48',
  },
];

import Scroll from '../../../components/innerscreens/Scroll';

import BakerDisplay from '../../../components/innerscreens/BakerDisplay';
import Contentheader from '../../../components/innerscreens/Contentheader';
import {useNavigation} from '@react-navigation/native';
export default function (props) {
  const navigation = useNavigation();

  return <Allfoodgrains {...props} navigation={navigation} />;
}
class Allfoodgrains extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Contentheader />
        <View style={styles.headertwo}>
          <Text>FOODGRAINS, OIL & MASALA</Text>
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

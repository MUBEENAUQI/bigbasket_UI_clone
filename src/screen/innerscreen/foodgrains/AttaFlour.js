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
  {scrolltext: 'Atta Whole Wheat'},
  {scrolltext: 'Sooji,Maida & Besan'},
  {scrolltext: 'Rice & Other Flours'},
];
const displaylist = [
  {
    image: require('../../../../assets/images/food/wheat.jpg'),
    type: 'BB RECOMMENDS',
    brand: 'BB ROYAL',
    name: 'Wheat Flour(Chakki Atta)',
    star: '4',
    rating: '11891 Ratings',
    kg: '10 kg',
    mrp: 'Rs 450',
    actmrp: 'Rs 383',
  },
  {
    image: require('../../../../assets/images/food/Atta.jpg'),
    type: 'BB RECOMMENDS',
    brand: 'AASHIRVAAD',
    name: 'Atta- Whole Wheat',
    star: '4.1',
    rating: '23630 Ratings',
    kg: '10 kg-Pouch',
    mrp: 'Rs 490',
    actmrp: 'Rs 410',
  },

  {
    image: require('../../../../assets/images/food/maida.jpg'),
    type: 'BB RECOMMENDS',
    brand: 'BB ROYAL',
    name: 'Maida',
    star: '4',
    rating: '18814 Ratings',
    kg: '2 kg-Pouch',
    mrp: 'Rs 120',
    actmrp: 'Rs 68',
  },

  {
    image: require('../../../../assets/images/food/besan.jpg'),
    type: 'BB RECOMMENDS',
    brand: 'BB ROYAL',
    name: 'Besan Flour',
    star: '4',
    rating: '6602 Ratings',
    kg: '1 kg-Pouch',
    mrp: 'Rs 150',
    actmrp: 'Rs 79',
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
    image: require('../../../../assets/images/food/wheat.jpg'),
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
    image: require('../../../../assets/images/food/wheat.jpg'),
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

  return <Atta {...props} navigation={navigation} />;
}

class Atta extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Contentheader />
        <View style={styles.headertwo}>
          <Text>ATTA,FLOURS & SOOJI</Text>
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

import React from 'react';
import {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  ScrollView,
  Modal,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

var wid = Dimensions.get('window').width / 2 - 15;

import Filteropt from '../components/filteropt';
import Sortopt from '../components/sortopt';
import Footer1 from '../components/footer';

import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default class FilterFruits extends React.Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="#87BE56" barStyle="light-content" />

        <SafeAreaView>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.container2}>
              <View style={styles.container}>
                <View style={styles.head}>
                  <EvilIcons style={styles.icon} name="close" />
                  <View style={styles.textbox}>
                    <Text style={styles.text}>Filter</Text>
                  </View>
                </View>
                <View style={styles.box}>
                  <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => {
                      this.refs.scroll.scrollTo({x: 0});
                    }}>
                    <Text style={styles.button}>Refine by</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => {
                      this.refs.scroll.scrollTo({
                        x: Dimensions.get('window').width * 2,
                      });
                    }}>
                    <Text style={styles.button}>Sort by</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                horizontal={true}
                pagingEnabled={true}
                indicatorStyle="black"
                showsHorizontalScrollIndicator={false}
                ref={'scroll'}
                contentContainerStyle={styles.horiscroll}>
                <View style={{flexDirection: 'column'}}>
                  <View>
                    <View style={styles.container4} />

                    <View style={styles.refinecontainer}>
                      {DATA.map((datas) => (
                        <Filteropt list={datas} key={datas.label} />
                      ))}
                    </View>
                  </View>
                </View>
                <View style={styles.container3}>
                  <View>
                    <View style={styles.container5} />
                    <View style={styles.sortcontainer}>
                      <Sortopt data={sort} />
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
          </ScrollView>
          <View>
            <Footer1 data={true} />
          </View>
        </SafeAreaView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {backgroundColor: 'white'},

  head: {
    backgroundColor: '#689f39',
    height: 45,
  },
  textbox: {
    width: '93%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
    marginTop: -30,
  },
  box: {
    flexDirection: 'row',

    height: 45,
  },
  buttons: {alignItems: 'center', justifyContent: 'center', flex: 1},
  button: {
    color: '#929292',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 1,
  },
  icon: {
    fontSize: 35,
    color: 'white',
    marginTop: 10,
    marginLeft: 10,
  },
  container2: {
    width: '100%',
    backgroundColor: 'white',
    height: 1248,
  },
  horiscroll: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  container3: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  container4: {
    backgroundColor: 'black',
    height: 4,
    marginLeft: 10,
    width: Dimensions.get('window').width / 2 - 15,
  },
  refinecontainer: {
    borderBottomColor: '#cccccc',
    borderBottomWidth: 0.35,
    paddingBottom: 1,
    borderColor: '#cccccc',
    borderTopWidth: 1,
    marginTop: -1,
  },
  container5: {
    backgroundColor: 'black',
    height: 9,
    width: Dimensions.get('window').width / 2 - 20,
    marginLeft: Dimensions.get('window').width / 2 + 10,
  },
  sortcontainer: {
    borderColor: '#cccccc',
    borderTopWidth: 1.5,
    marginTop: -6,
  },
});
const sort = [
  {text: 'Popularity'},
  {text: 'Price - Low to High'},
  {text: 'Price - High to Low'},
  {text: 'Alphabetical'},
  {text: 'Rupee Saving - High to Low'},
  {text: 'Rupee Saving - Low to High'},
  {text: '% Off - High to Low'},
];

const DATA = [
  {
    label: 'Brand',
    datalist: [
      {id: '1', title: 'bb Combo'},
      {id: '3', title: 'Brotos'},
      {id: '2', title: 'Fresho'},
    ],
  },

  {
    label: 'Price',
    datalist: [
      {
        id: '1',
        title: 'Less than Rs 20',
      },
      {
        id: '2',
        title: 'Rs 21 to Rs 50',
      },
      {
        id: '3',
        title: 'Rs 51 to Rs 100',
      },
      {
        id: '4',
        title: 'Rs 101 to Rs 200',
      },
    ],
  },

  {
    label: 'Discount',
    datalist: [
      {
        id: '1',
        title: '10% - 15%',
      },
      {
        id: '2',
        title: '15% - 25%',
      },
      {
        id: '3',
        title: 'More than 25%',
      },
    ],
  },
  {
    label: 'Pack Size',
    datalist: [
      {
        id: '1',
        title: '1 kg',
      },
      {
        id: '2',
        title: '1 pc',
      },
      {
        id: '3',
        title: '1 pc (approx. 400 to 600 g)',
      },
      {
        id: '4',
        title: '1 pc (approx. 500 to 800 g)',
      },
      {
        id: '5',
        title: '1 pc (Approx. 700 to 1 kg)',
      },
      {
        id: '6',
        title: '100 g',
      },
      {
        id: '7',
        title: '2 pcs',
      },
      {
        id: '9',
        title: '200 g',
      },
      {
        id: '8',
        title: '250 g',
      },
      {
        id: '10',
        title: '5 pcs',
      },
      {
        id: '11',
        title: '500 g',
      },
      {
        id: '12',
        title: '70 to 100 gm (Bunch)',
      },
      {
        id: '13',
        title: '80 g',
      },
      {
        id: '14',
        title: 'Combo (2 items)',
      },
      {
        id: '15',
        title: 'Combo 3 items',
      },
      {
        id: '16',
        title: 'Combo 4 items',
      },
    ],
  },

  {
    label: 'Food Preference',
    datalist: [
      {
        id: '1',
        title: 'Vegetarian',
      },
    ],
  },
];

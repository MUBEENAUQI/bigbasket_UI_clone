import React, { Component } from "react";
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    StatusBar,
    ScrollView,
    Image
  } from "react-native";
  import EvilIcons from 'react-native-vector-icons/EvilIcons';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import { Dimensions } from "react-native";

  const horizontalscroll = [
    {scrolltext: 'Fresh vegetables'},
    {scrolltext: 'FreshFruits'},
    {scrolltext: 'Herbs & seasonings'},
    {scrolltext: 'Exotic Fruits & Veggies'},
   
  ];
  const vegimages=[

    {
        image:require('../../assets/images/fruits/pome.jpg'),
        vegname:'pomegranate',
        kg:'4 PCS-(approx.800 to ..)',
        mrp:'Rs 161.25',
        actmrp:'Rs 129'
  },

  {
    image:require('../../assets/images/exotic/corn.jpg'),
    vegname:'Garlic Peeled',
    kg:'100 g-Multipack',
    mrp:'Rs 138.75',
    actmrp:'Rs 111'
},
{
    image:require('../../assets/images/exotic/mush.jpg'),
    vegname:'Mushrooms-Button',
    kg: '200 g',
    mrp:'Rs 61.25',
    actmrp:'Rs 49'
},

    {
        image:require('../../assets/images/sprouts/ten.jpg'),
        vegname:'Tender Coconut-Medium',
        kg:'1PC',
        mrp:'Rs46.25',
        actmrp:'Rs 37'
    },
    {
        image:require('../../assets/images/sprouts/tend.jpg'),
        vegname:'Tender Coconut-Small',
        kg: '1 PC',
        mrp:'Rs 45',
        actmrp:'Rs 36'
    },
  
 
         
 
  ];
  
import Scroll from '../components/Scroll';

import Display from '../components/DisplayList';
import Contentheader from '../components/Contentheader'

export default class ViewallVeg extends Component {
  render() {
      return (
          <View>   
              
               <Contentheader/>
                <View style={styles.headertwo}><Text>FRESH FRUITS & VEGETABLES</Text></View>
              <View style={{width:'100%',backgroundColor:'#D7ECC5'}}>
              <ScrollView horizontal={true} style={styles.scrollview}>
                  <Scroll data={horizontalscroll}></Scroll>
                 </ScrollView>
              </View>
                 
              
              
              <View style={styles.filter}>
                  <View style={styles.filtericon}>
                  <Ionicons style={{fontSize:25}} name="options-outline" ></Ionicons>
                  <Text>Filter</Text>
                  </View>
              </View>
              <ScrollView style={styles.displaybox}>
              <Display data={vegimages}></Display>
   
              </ScrollView>
             
             




          </View>
          

          );
      }
      }
      const styles=StyleSheet.create({
      
          header:{
          height:60,  
          backgroundColor:"#689f39",
          flexDirection:'row' ,
          alignItems:'center' ,
          justifyContent:'space-between'
          }, 
          headertwo:{
              backgroundColor:'white',
              height:23,
              justifyContent:'center',
              alignItems:'center'
          },
       
          scrollview:{
            height:50,
            width:Dimensions.get('window').width,

          },
          filter:{
              height:40,
              width:Dimensions.get('window').width,
              backgroundColor:'#E7ECC4',      
              paddingLeft:270,
              justifyContent:'center'
          },
          filtericon:{
              height:35,
              width:80,
              backgroundColor:'white',
              justifyContent:"center",
              borderRadius:5,
              flexDirection:'row',
              alignItems:'center'
          },
          displaybox:{
             
              height:Dimensions.get('window').height,
              width:Dimensions.get('window').width,
              backgroundColor:'#D7ECC5'
          },
         
         
         
          
         
      
      })
      
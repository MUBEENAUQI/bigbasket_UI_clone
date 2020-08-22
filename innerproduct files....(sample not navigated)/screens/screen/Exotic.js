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
    {scrolltext: 'Exotic fruits'},
    {scrolltext: 'Exotic Vegetables'},
   
   
  ];
  const vegimages=[
    {
          image:require('../../assets/images/exotic/mush.jpg'),
          vegname:'Mushrooms-Button',
          kg: '200 g',
          mrp:'Rs 61.25',
          actmrp:'Rs 49'
    },
    {
        image:require('../../assets/images/exotic/corn.jpg'),
        vegname:'Sweet Corn',
        kg:'2 PC',
        mrp:'Rs 36.25',
        actmrp:'Rs 29'
    },
    {
        image:require('../../assets/images/exotic/cucumber.jpg'),
        vegname:'Cucumber-English',
        kg: '500 g',
        mrp:'Rs 25',
        actmrp:'Rs 20'
    },
    {
        image:require('../../assets/images/exotic/avac.jpg'),
          vegname:'Avacado',
          kg:'500 g',
          mrp:'Rs 123.75',
          actmrp:'Rs 99'
    },
         
    {
        image:require('../../assets/images/exotic/bro.jpg'),
          vegname:'Broccoli',
          kg: '500 g',
          mrp:'Rs 106.25',
          actmrp:'Rs 85'
    },

  ];
  
import Scroll from '../components/Scroll';

import Display from '../components/DisplayList';
import Contentheader from '../components/Contentheader'

export default class Vegetables extends Component {
  render() {
      return (
          <View>   
              
               <Contentheader/>
                <View style={styles.headertwo}><Text>EXOTIC FRUITS & VEGGIES</Text></View>
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
      
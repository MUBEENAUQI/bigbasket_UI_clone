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
    {scrolltext: 'Lemon, Ginger & Garlic'},
    {scrolltext: 'Indian Herbs'},
    {scrolltext: ' Exotic Herbs'},
   
  ];
  const vegimages=[
    {
          image:require('../../assets/images/herbal/lem.jpg'),
          vegname:'Lemon',
          kg: '250 g',
          mrp:'Rs 273.75',
          actmrp:'Rs 19'
    },
    {
        image:require('../../assets/images/herbal/coria.jpg'),
        vegname:'Coriander Leaves',
        kg:'100 g',
        mrp:'Rs 11.25',
        actmrp:'Rs 9'
    },
    {
        image:require('../../assets/images/herbal/chil.jpg'),
        vegname:'Chilly-Green Long,Medium',
        kg: '250 g',
        mrp:'Rs 22.50',
        actmrp:'Rs 12.50'
    },
    {
        image:require('../../assets/images/herbal/ging.jpg'),
          vegname:'Ginger,Organically Grown',
          kg:'100 g',
          mrp:'Rs 20',
          actmrp:'Rs 16'
    },
         
    {
        image:require('../../assets/images/herbal/garlic.jpg'),
          vegname:'Garlic',
          kg: '250 g',
          mrp:'Rs 61.25',
          actmrp:'Rs 37.50'
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
                <View style={styles.headertwo}><Text>HERBS & SEASONING</Text></View>
              
                 <ScrollView horizontal={true} style={styles.scrollview}>
                  <Scroll data={horizontalscroll}></Scroll>
                 </ScrollView>
              
              
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
      
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
  {scrolltext: 'Butter & margarine'},
  {scrolltext: 'Condensed Milk'},
  {scrolltext: 'ButterMilk & Lassi'},
  {scrolltext: 'Paneer,Tofu & Cream'},
  {scrolltext: 'Milk'},
  {scrolltext: 'Cheese'},
  {scrolltext: 'yogurt & Shrikhand'},

  ];
 

 
  const displaylist=[
    {
        image:require('../../../assets/images/Bakery/paneer/one.jpg'), 
        brand:'MILKY MIST',
        name:'Paneer - Premium Fresh',
        star:'3.8',
        rating:'6174 Ratings',
        kg:'200 g-Pouch',
        mrp:'Rs 90',
        actmrp:'Rs 77'
    },
    {
        image:require('../../../assets/images/Bakery/paneer/two.jpg'), 
        brand:'AMUL',
        name:'Malai Paneer - Cubes',
        star:'3.9',
        rating:'16953 Ratings',
        kg:'1 kg - Pouch',
        mrp:'Rs 350',
        actmrp:'Rs 340 '
    },
   
    {
        image:require('../../../assets/images/Bakery/paneer/three.jpg'),  
        brand:'NANDINI',
        name:'Paneer',
        star:'3.8',
        rating:'1438 Ratings',
        kg:'1 kg- Pouch',
        mrp:'321.50',
        actmrp:'Rs 320'
     
    },
         
    {
        image:require('../../../assets/images/Bakery/paneer/four.jpg'), 
    
        brand:'AMUL',
        name:'Fresh Paneer',
        star:'4',
        rating:'7615 Ratings',
        kg:'200 g',
        mrp:'21.50 ',
        actmrp:'Rs 20'

    },

    {
        image:require('../../../assets/images/Bakery/paneer/one.jpg'), 
        brand:'MOTHER DAIRY',
        name:'Paneer - Malai',
        star:'4',
        rating:'1378 Ratings',
        kg:'200 g',
        mrp:' 90',
        actmrp:'Rs 85'
    },
    {
        image:require('../../../assets/images/Bakery/paneer/one.jpg'), 
        brand:'MOTHER DAIRY',
        name:'Misti Doi',
        star:'4.1',
        rating:'1350 Ratings',
        kg:'85 g -  Cup',
        mrp:'22.50',
        actmrp:'Rs 20'
    },

    
    

  ];
   
import Scroll from '../../components/Scroll'
import BakerDisplay from '../../components/BakerDisplay'
import Contentheader from '../../components/Contentheader'

export default class Vegetables extends Component {
  render() {
      return (
          <View>   
              
               <Contentheader/>
                <View style={styles.headertwo}><Text>DAIRY</Text></View>
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
              <BakerDisplay data={displaylist}></BakerDisplay>
   
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
      
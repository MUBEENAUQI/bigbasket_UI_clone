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
  {scrolltext: 'Rusks'},
  {scrolltext: 'Biscuits,Cookies'},
  {scrolltext: 'Khari & Cream Rolls'},
  {scrolltext: 'Premium Cookies'},
  {scrolltext: 'Healthy Organic Cookies'},

  ];
 

 
  const displaylist=[
    {
        image:require('../../../assets/images/Bakery/cookies/one.jpg'), 
        brand:'BRITANNIA',
        name:'Bake Rusk (Toast)',
        star:'4',
        rating:'25364 Rating',
        kg:'200 g',
        mrp:' Rs 32.50',
        actmrp:'Rs 300',

    },
    {
        image:require('../../../assets/images/Bakery/cookies/two.jpg'), 
        brand:'BRITANNIA',
        name:'Premium Bake Rusk',
        star:'4.1 ',
        rating:'36241 Rating',
        kg:'2x273 g Multipack',
        mrp:'66',
        actmrp:'Rs 64'


    },
   
    {
        
        image:require('../../../assets/images/Bakery/cookies/four.jpg'), 
        brand:'ELITE ',
        name:'Rusk - Milk',
        star:'4.2',
        rating:'56324 Rating',
        kg:'270 g',
        mrp:'41.50',
        actmrp:'Rs 40'

    },

    {
    
        image:require('../../../assets/images/Bakery/cookies/three.jpg'),  
        brand:'CADBURY',
        name:'Chocobakes Choc Layered Cakes Packs',
        star:'3.9 ',
        rating:'53214 Rating',
        kg:'126 g',
        mrp:'62.50',
        actmrp:'Rs 60'   


    },

    {
        image:require('../../../assets/images/Bakery/cookies/one.jpg'), 
        brand:'TASTIES',
        name:' Rusk - Suji & Elaichi',
        star:'4.2',
        rating:'265874 Rating',
        kg:'2x200 g - Multipack',
        mrp:'94.50',
        actmrp:'Rs 93.10'

    },
    {
        image:require('../../../assets/images/Bakery/cookies/one.jpg'), 
        brand:'BRITANNIA',
        name:'Bake Rusk (Toast)',
        star:'4',
        rating:'25364 Rating',
        kg:'200 g',
        mrp:' Rs 32.50',
        actmrp:'Rs 300',
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
                <View style={styles.headertwo}><Text>COOKIES</Text></View>
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
      
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
  {scrolltext: 'Croissants Bagels'},
  {scrolltext: 'Bangels & Banguette'},
  {scrolltext: 'Gourmet Bread'},
  {scrolltext: 'Pannini,Focaccia & Pita'},

  ];
 

 
  const displaylist=[
    {

        
        image:require('../../../assets/images/Bakery/gourmet/one.jpg'), 
        brand:'BRITANNIA',
        name:'Bake Rusk (Toast)',
        star:'4',
        rating:'25364 Rating',
        kg:'200 g-Pouch',
        mrp:' Rs 32.50',
        actmrp:'Rs 30',

    },
    {
        image:require('../../../assets/images/Bakery/gourmet/two.jpg'), 
        brand:'BAULI',
        name:'Moonfils Choco Cream',
        star:'3.9',
        rating:'69541 Rating',
        kg:'45 g - Pouch',
        mrp:'16.50',
        actmrp:'Rs 15'


    },
   
    {
        
        image:require('../../../assets/images/Bakery/gourmet/four.jpg'), 
        brand:'CADBURY',
        name:'Moonfils Orange',
        star:'3.9',
        rating:'36245 Rating',
        kg:'45 g - Pouch',
        mrp:'16.50',
        actmrp:'Rs 15'



    },

    {
    
        image:require('../../../assets/images/Bakery/gourmet/three.jpg'),  
        brand:' MILK MA',
        name:'Critters - Whole Wheat',
        star:'4.1',
        rating:'6254 Rating',
        kg:'150 g',
        mrp:'41.50',
        actmrp:'Rs 40'


    },

    {
        image:require('../../../assets/images/Bakery/gourmet/one.jpg'), 
        brand:'BRITANNIA',
        name:' Treat Croissant Vanilla Creme',
        star:'4.2',
        rating:'62541 Rating',
        kg:'45 g',
        mrp:'16.75',
        actmrp:'Rs 15'


    },
    {
        image:require('../../../assets/images/Bakery/gourmet/one.jpg'), 
        brand:'BAULI',
        name:'Moonfils Choco Cream',
        star:'3.9',
        rating:'69541 Rating',
        kg:'45 g - Pouch',
        mrp:'16.50',
        actmrp:'Rs 15'
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
                <View style={styles.headertwo}><Text>GOURMET BREADS</Text></View>
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
      
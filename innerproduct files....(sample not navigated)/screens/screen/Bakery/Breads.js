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
  {scrolltext: 'brown,Wheat & Multigrain'},
  {scrolltext: 'Milk,White & Sandwich'},
  {scrolltext: 'Buns,Pavs & Pizza Base'},


  ];
 

 
  const displaylist=[
    {
        image:require('../../../assets/images/Bakery/breads/one.jpg'), 
        brand:'FRESHO SIGNATURE',
        name:'Fruit Tea Cake',
        star:'4',
        rating:'25364 Rating',
        kg:'Combo-2 Items',
        mrp:' Rs 108',
        actmrp:'Rs 100',

    },
    {
        image:require('../../../assets/images/Bakery/breads/three.jpg'),  
        brand:'BRITANNIA',
        name:'Fruit Cake',
        star:'3.9 ',
        rating:'53214 Rating',
        kg:'120 g',
        mrp:'22.50',
        actmrp:'Rs 20.10'
     
    },
    {
        image:require('../../../assets/images/Bakery/breads/two.jpg'), 
        brand:'FRESHO SIGNATURE',
        name:'Tea Cake - Banana Walnut',
        star:'4.1 ',
        rating:'36241 Rating',
        kg:'200 g  ',
        mrp:'162',
        actmrp:'Rs 159 '
    },
   
   
         
    {
        image:require('../../../assets/images/Bakery/breads/four.jpg'), 
        brand:'FRESHO SIGNATURE',
        name:'Marble Tea Cake',
        star:'4.2',
        rating:'56324 Rating',
        kg:'250 g ',
        mrp:'160',
        actmrp:'Rs 159'

    },

    {
        image:require('../../../assets/images/Bakery/breads/one.jpg'), 
        brand:'FRESHO SIGNATURE',
        name:' Choco Chip Tea Cake',
        star:'4.2',
        rating:'265874 Rating',
        kg:'250 g',
        mrp:'160',
        actmrp:'Rs 159'
    },
    {
        image:require('../../../assets/images/Bakery/breads/one.jpg'), 
        brand:'MOTHER DAIRY',
        name:'Misti Doi',
        star:'4.1',
        rating:'1350 Ratings',
        kg:'85 g -Cup',
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
                <View style={styles.headertwo}><Text>BREADS & BUNS</Text></View>
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
      
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
  {scrolltext: 'Cheese & Gaelic Bread'},
  {scrolltext: 'Bread Sticks & Lavash'},
  {scrolltext: 'Organic& Free From'},
  

  ];
 

 
  const displaylist=[



    
    {

        
        image:require('../../../assets/images/Bakery/snacks/one.jpg'), 
        brand:'FRESHO SIGNATURE',
        name:'Bread - Garlic',
        star:'4.1',
        rating:'36244 Rating',
        kg:'200 g',
        mrp:'66.50',
        actmrp:'Rs 65'


    },
    {
        image:require('../../../assets/images/Bakery/snacks/two.jpg'), 
        brand:'THE BAKERS DOZEN',
        name:'Ragi Crackers',
        star:'3.9',
        rating:'63521 Rating',
        kg:'100 g - Pouch',
        mrp:'92.75',
        actmrp:'Rs 90 '



    },
   
    {
        
        image:require('../../../assets/images/Bakery/snacks/four.jpg'), 
        brand:'THE BAKERS DOZEN',
        name:'Lavash - 100% Wholewheat',
        star:'4.2',
        rating:'96325 Rating',
        kg:'100 g',
        mrp:'102.50',
        actmrp:'Rs 100'




    },

    {
    
        image:require('../../../assets/images/Bakery/snacks/three.jpg'),  
        brand:'THE BAKERS DOZEN',
        name:'Garlic Bread - 100% Wholewheat',
        star:' ',
        rating:' ',
        kg:'100 g',
        mrp:' ',
        actmrp:'Rs 85'



    },

    {
        image:require('../../../assets/images/Bakery/snacks/one.jpg'), 
        brand:'THE BAKERS DOZEN',
        name:'Gingerbread Men',
        star:'4',
        rating:'32541 Rating',
        kg:'250 g - Pack of 12',
        mrp:'202.50',
        actmrp:'Rs 200'


    },
   

    
    

  ];
  
import Scroll from '../../components/Scroll'
import BakerDisplay from '../../components/BakerDisplay'
import Contentheader from '../../components/Contentheader'

export default class Bakery extends Component {
  render() {
      return (
          <View>   
              
               <Contentheader/>
                <View style={styles.headertwo}><Text>BAKERY SNACKS</Text></View>
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
      
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
    {scrolltext: 'Potato,Onion & Tomato'},
    {scrolltext: 'Leafy Vegetables'},
    {scrolltext: 'Root Vegetables'},
    {scrolltext: 'Cucumber & Capsicum'},
    {scrolltext: 'Cabbage & Cauliflower'},
    {scrolltext: 'Beans,Brinjals & Okra'},
    {scrolltext: 'Ground,PumpkinDrumstick'},
    {scrolltext: 'Speciality'},
  ];
  const vegimages=[
      {
          image:require('../../assets/images/vegImage/oni.jpg'),
          vegname:'ONION',
          kg: '1 kg',
          mrp:'Rs 30',
          actmrp:'Rs 19'
      },
      {
        image:require('../../assets/images/vegImage/pot.jpg'),
        vegname:'POTATO',
        kg:'1 Kg',
        mrp:'Rs 50',
        actmrp:'Rs 40'
    },
    {
        image:require('../../assets/images/vegImage/carr.jpg'),
        vegname:'CARROT-LOCAL',
        kg: '250 g',
        mrp:'Rs 17.50',
        actmrp:'Rs 14'
    },
      {
          image:require('../../assets/images/vegImage/lf.jpg'),
          vegname:'LADIES-FINGER',
          kg:'500 g',
          mrp:'Rs 20',
          actmrp:'Rs 16'
    },
     
      
      {
          image:require('../../assets/images/vegImage/sp.jpg'),
          vegname:'PALAK',
          kg: '100 g',
          mrp:'Rs 10',
          actmrp:'Rs 8'
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
                  <View style={styles.headertwo}><Text>FRESH VEGETABLES</Text></View>
                
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
        
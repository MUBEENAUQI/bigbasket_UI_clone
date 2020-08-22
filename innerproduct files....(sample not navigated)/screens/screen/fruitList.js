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
    {scrolltext: 'Mangoes'},
    {scrolltext: 'Kiwi,Melcon,Citrus Fruit'},
    {scrolltext: 'Apples & Pomegranate'},
    {scrolltext: 'Banana,Sapota & Papaya'},
    {scrolltext: 'Seasonal Fruits'},
   
  ];
  const vegimages=[

    {
      image:require('../../assets/images/fruits/pome.jpg'),
      vegname:'pomegranate',
      kg:'4 PCS-(approx.800 to ..)',
      mrp:'Rs 148.75',
      actmrp:'Rs 119'
},




    {
          image:require('../../assets/images/fruits/banana.jpg'),
          vegname:'BANANA-Yelakki',
          kg: '1 kg',
          mrp:'Rs 105',
          actmrp:'Rs 65'
    },
    {
      image:require('../../assets/images/fruits/watermelon.jpg'),
      vegname:'Watermelon-Small',
      kg: '1 PC-1.7 -2.5 kg',
      mrp:'Rs 36.25',
      actmrp:'Rs 16.80'
},
    {
        image:require('../../assets/images/fruits/coco.jpg'),
        vegname:'Coconut - Medium',
        kg:'1 PC',
        mrp:'Rs 32.50',
        actmrp:'Rs 26'
    },
    {
        image:require('../../assets/images/fruits/tender.jpg'),
        vegname:'Tender Coconut -Medium',
        kg: '1 PC',
        mrp:'Rs 46.25',
        actmrp:'Rs 37'
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
                  <View style={styles.headertwo}><Text>FRESH FRUITS</Text></View>
                
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
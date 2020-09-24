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

 
  const displaylist=[
    {
        image:require('../../../assets/images/Bakery/milk/one.jpg'), 
        brand:'NANDINI GOODLIFE',
        name:'Toned Milk',
        star:'4',
        rating:'7095 Ratings',
        kg:'500 ml-Pouch',
        mrp:'Rs 25',
        actmrp:'Rs 23.50'

    },
    {
        image:require('../../../assets/images/Bakery/milk/two.jpg'),
        brand:'NANDINI GOODLIFE',
        name:'Toned Milk',
        star:'4.1',
        rating:'3071 Ratings',
        kg:'1 L - Carton',
        mrp:'Rs 53',
        actmrp:'Rs 50.35'

    },
   
    {
        image:require('../../../assets/images/Bakery/milk/three.jpg'),
        brand:'AMUL TAAZA',
        name:'Toned Milk',
        star:'4.1',
        rating:'3634 Ratings',
        kg:'1 l- Carton',
        mrp:'Rs 72',
        actmrp:'Rs 64'


    },
         
    {
        image:require('../../../assets/images/Bakery/milk/four.jpg'),
        brand:'NANDINI GOODLIFE',
        name:'Toned Milk',
        star:'3.8',
        rating:'1017 Ratings',
        kg:'500 ml-Pack of 20',
        mrp:'Rs 550  ',
        actmrp:'Rs 500'

    },
    {
        image:require('../../../assets/images/Bakery/milk/five.jpg'), 
        brand:'NANDINI GOODLIFE',
        name:'Skimmed Milk',
        star:'3.8',
        rating:'1385 Ratings',
        kg:'500 ml-Packof 20',
        mrp:'Rs  500 ',
        actmrp:'Rs 480'

    },
     {
        image:require('../../../assets/images/Bakery/milk/four.jpg'),
        brand:'NANDINI GOODLIFE',
        name:'Toned Milk',
        star:'3.8',
        rating:'1017 Ratings',
        kg:'500 ml-Pack of 20',
        mrp:'Rs  520 ',
        actmrp:'Rs 500'

    },
    {
        image:require('../../../assets/images/Bakery/milk/five.jpg'), 
        brand:'NANDINI GOODLIFE',
        name:'Skimmed Milk',
        star:'3.8',
        rating:'1385 Ratings',
        kg:'500 ml-Packof 20',
        mrp:'Rs   500',
        actmrp:'Rs 480'

    },

    
    

  ];
  
  import BakerDisplay from '../../components/BakerDisplay'
  import Contentheader from '../../components/Contentheader'
  
  export default class Vegetables extends Component {
    render() {
        return (
            <View>   
                
                 <Contentheader/>
                  <View style={styles.headertwo}><Text>MILK AND MILK POWDER</Text></View>
                
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
        
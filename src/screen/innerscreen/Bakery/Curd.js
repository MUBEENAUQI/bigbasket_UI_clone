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
        image:require('../../../assets/images/Bakery/curd/one.jpg'), 
        brand:'MILKY MIST',
        name:'Curd - Farm Fresh',
        star:'4',
        rating:'6220 Ratings',
        kg:'500 g-Pouch',
        mrp:'37.50',
        actmrp:'Rs 35'

    },
    {
        image:require('../../../assets/images/Bakery/curd/two.jpg'), 
        brand:'AMUL',
        name:'Masti Buttermilk -Spice',
        star:'4.2',
        rating:'10947 Ratings',
        kg:'1 l',
        mrp:'50',
        actmrp:'Rs 47'
    },
   
    {
        image:require('../../../assets/images/Bakery/curd/three.jpg'), 
        brand:'MILKY MIST',
        name:'Natural Set Curd',
        star:'4',
        rating:'1648 Ratings',
        kg:'1 kg- Cup',
        mrp:'100',
        actmrp:'Rs 95'

    },
         
    {
        image:require('../../../assets/images/Bakery/curd/four.jpg'), 
        brand:'MOTHER DAIRY',
        name:'Misti Doi',
        star:'4.1',
        rating:'1350 Ratings',
        kg:'85 g -  Cup',
        mrp:'22.50',
        actmrp:'Rs 20'

    },

     {
        image:require('../../../assets/images/Bakery/curd/one.jpg'), 
        brand:'MILKY MIST',
        name:'Fruit Yogurt - BlueBerry',
        star:'3.8',
        rating:'1036 Ratings',
        kg:'100 g',
        mrp:'32.50',
        actmrp:'Rs 30'
    },
    {
        image:require('../../../assets/images/Bakery/curd/one.jpg'), 
        brand:'MOTHER DAIRY',
        name:'Misti Doi',
        star:'4.1',
        rating:'1350 Ratings',
        kg:'85 g -  Cup',
        mrp:'22.50',
        actmrp:'Rs 20'
    },

    
    

  ];
  
  import BakerDisplay from '../../components/BakerDisplay'
  import Contentheader from '../../components/Contentheader'
  
  export default class Bakery extends Component {
    render() {
        return (
            <View>   
                
                 <Contentheader/>
                  <View style={styles.headertwo}><Text>CURD AND BUTTER MILK</Text></View>
                
                   
                
                
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
        
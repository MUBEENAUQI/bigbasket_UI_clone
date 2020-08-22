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
    {scrolltext: 'Boiles Rice & Steam Rice'},
    {scrolltext: 'Raw Rice'},
    {scrolltext: 'Poha,Sabudana & Murmura'},
    {scrolltext: 'Basumati Rice'},

   
  ];
  const displaylist=[
    {
        image:require('../../../assets/images/food/rice/basmati.jpg'),
       
        brand:'BB ROYAL',
        name:'Basmati rice-Rozana Premium',
        star:'3.9',
        rating:'1782 Ratings',
        kg:'5 KG -Pouch',
        mrp:'Rs 510',
        actmrp:'Rs 381'
    },
    {
        image:require('../../../assets/images/food/rice/poha.jpg'),
        brand:'BB ROYAL',
        name:'Poha/ Avalakki/Aval/Chivda -Thick',
        star:'4.1',
        rating:'258744 Ratings',
        kg:'1kg -Pouch',
        mrp:'Rs 80',
        actmrp:'Rs 49'
    },
   
    {
        image:require('../../../assets/images/food/rice/riceraw.jpg'),
        
        brand:'BB POPULAR',
        name:'Rice-Raw, Sona Masoori',
        star:'4.1',
        rating:'17314 Ratings',
        kg:'25 kg-(6-11 Months O...)',
        mrp:'Rs 1625',
        actmrp:'Rs 1186'
    },
         
    {
        image:require('../../../assets/images/food/rice/rawrice.jpg'),
        brand:'BB ROYAL',
        name:'Raw rice-Sona Masoori',
        star:'4.2',
        rating:'7642 Ratings',
        kg:'10 kg(12-17 Months...',
        mrp:'Rs 150',
        actmrp:'Rs 79'
    },
    {
        image:require('../../../assets/images/food/rice/idlirice.jpg'),
        brand:'BB ROYAL',
        name:'Idli Rice',
        star:'4',
        rating:' 4720 Ratings',
        kg:'10 kg-Bag',
        mrp:'Rs 570',
        actmrp:'Rs 399'
    },
    {
        image:require('../../../assets/images/food/rice/basmati.jpg'),
        type:'BB RECOMMENDS',
        brand:'BB ROYAL',
        name:'Sooji Ordinary/Bombay Rava',
        star:'4.1',
        rating:' 5694Ratings',
        kg:'1 kg-Pouch',
        mrp:'Rs 60',
        actmrp:'Rs 48'
    },
    {
        image:require('../../../assets/images/food/rice/basmati.jpg'),
        type:'BB RECOMMENDS',
        brand:'BB ROYAL',
        name:'Sooji Ordinary/Bombay Rava',
        star:'4.1',
        rating:' 5694Ratings',
        kg:'1 kg-Pouch',
        mrp:'Rs 60',
        actmrp:'Rs 48'
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
                  <View style={styles.headertwo}><Text>RICE & RICE PRODUCTS</Text></View>
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
        
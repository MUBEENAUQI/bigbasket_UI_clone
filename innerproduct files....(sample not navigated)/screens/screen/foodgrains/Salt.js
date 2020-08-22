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
  {scrolltext: 'Sugar & Jaggery'},
  {scrolltext: 'Salts'},
  {scrolltext: 'Sugarfree Sweeteners'},

  
  ];
 

 
  const displaylist=[
    {

        
        image:require('../../../assets/images/food/salt/one.jpg'), 
        brand:'BB ROYAL',
        name:'Sugar',
        star:'4.1',
        rating:'13292 Rating',
        kg:'2 kg',
        mrp:'120',
        actmrp:'Rs 95'


    },
    {
        image:require('../../../assets/images/food/salt/two.jpg'), 
        brand:'BB POPULAR',
        name:'Sugar',
        star:'4',
        rating:'43184 Rating',
        kg:'5kg',
        mrp:'275',
        actmrp:'Rs 207'



    },
   
    {
        
        image:require('../../../assets/images/food/salt/three.jpg'), 
        brand:'TATA SALT',
        name:'Iodized',
        star:'4.3',
        rating:'33571 Rating',
        kg:'1 kg-Pouch',
        mrp:'20',
        actmrp:'Rs 19.80'

    },

    {
    
        image:require('../../../assets/images/food/salt/four.jpg'),  
        brand:'BB COMBO',
        name:'BB popular Sugar 5kg+ BB Royal Honey 500 gm',
        star:'4.1',
        rating:'1856 Rating',
        kg:'Combo -2Ithems',
        mrp:'471',
        actmrp:'Rs 356'



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
                  <View style={styles.headertwo}><Text>SALT, SUGAR & JAGGERY</Text></View>
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
        
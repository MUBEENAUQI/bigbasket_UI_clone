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
  {scrolltext: 'Almonds'},
  {scrolltext: 'Cashews'},
  {scrolltext: 'Raisins'},
  {scrolltext: 'Other Dry Fruits'},
  {scrolltext: 'Mukhwas'},
 

  
  ];
 

 
  const displaylist=[
    {

        
        image:require('../../../assets/images/food/dryfruits/one.jpg'), 
        brand:'BB ROYAL',
        name:'Almond/Badam-Californian,Giri',
        star:'4',
        rating:'13482 Rating',
        kg:'200 gm-Pouch',
        mrp:'240',
        actmrp:'Rs 180'


    },
    {
        image:require('../../../assets/images/food/dryfruits/two.jpg'), 
        brand:'BB ROYAL',
        name:'Organic-Almond/Badam',
        star:'3.9',
        rating:'3184 Rating',
        kg:'1kg',
        mrp:'1599',
        actmrp:'Rs 1200'



    },
   
    {
        
        image:require('../../../assets/images/food/dryfruits/three.jpg'), 
        brand:'BB ROYAL',
        name:'Organic-Cashew/Kaju Whole Premium',
        star:'4.3',
        rating:'33571 Rating',
        kg:'500 g',
        mrp:'899',
        actmrp:'Rs 649'

    },

    {
    
        image:require('../../../assets/images/food/dryfruits/four.jpg'),  
        brand:'BB POPULAR',
        name:'Cashew/Kaju-Whole',
        star:'4',
        rating:'11905 Rating',
        kg:'200 g',
        mrp:'300',
        actmrp:'Rs 208'



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
                  <View style={styles.headertwo}><Text>DRY FRUITS</Text></View>
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
        
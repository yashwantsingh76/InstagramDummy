import * as React from 'react';
import { Text, TextInput, View,StyleSheet,Image,FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {Grid,Col,Row} from 'react-native-easy-grid';
export default function Search() {

  const DATA = [
    {
      id: 'b1',
      img: '../../assets/Home/yashwant.jpg',
    },
    {
      id: 'b2',
      img: '../../assets/Home/yashwant2.jpg',
    },
    {
      id: 'b3',
      img: '../../assets/Home/yashwant3.jpg',
    },
    {
      id: 'b4',
      img: '../../assets/Home/yashwant2.jpg',
    },
    {
      id: 'b5',
      img: '../../assets/Home/yashwant3.jpg',
    },
    {
      id: 'b6',
      img: '../../assets/Home/yashwant2.jpg',
    },
    {
      id: 'b7',
      img: '../../assets/Home/yashwant2.jpg',
    },
    {
      id: 'b8',
      img: '../../assets/Home/yashwant3.jpg',
    },
    {
      id: 'b9',
      img: '../../assets/Home/yashwant2.jpg',
    },
    {
      id: 'b10',
      img: '../../assets/Home/yashwant3.jpg',
    },
    {
      id: 'b11',
      img: '../../assets/Home/yashwant2.jpg',
    },
    
    {
      id: 'b6',
      img: '../../assets/Home/yashwant2.jpg',
    },
    {
      id: 'b7',
      img: '../../assets/Home/yashwant2.jpg',
    },
    {
      id: 'b8',
      img: '../../assets/Home/yashwant3.jpg',
    },
    {
      id: 'b9',
      img: '../../assets/Home/yashwant2.jpg',
    },
    {
      id: 'b10',
      img: '../../assets/Home/yashwant3.jpg',
    },
    {
      id: 'b11',
      img: '../../assets/Home/yashwant2.jpg',
    },
    {
      id: 'b6',
      img: '../../assets/Home/yashwant2.jpg',
    },
    {
      id: 'b7',
      img: '../../assets/Home/yashwant2.jpg',
    },
    {
      id: 'b8',
      img: '../../assets/Home/yashwant3.jpg',
    },
    {
      id: 'b9',
      img: '../../assets/Home/yashwant2.jpg',
    },
    {
      id: 'b10',
      img: '../../assets/Home/yashwant3.jpg',
    },
    {
      id: 'b11',
      img: '../../assets/Home/yashwant2.jpg',
    },
    {
      id: 'b6',
      img: '../../assets/Home/yashwant2.jpg',
    },
    {
      id: 'b7',
      img: '../../assets/Home/yashwant2.jpg',
    },
    {
      id: 'b8',
      img: '../../assets/Home/yashwant3.jpg',
    },
    {
      id: 'b9',
      img: '../../assets/Home/yashwant2.jpg',
    },
    {
      id: 'b10',
      img: '../../assets/Home/yashwant3.jpg',
    },
    {
      id: 'b11',
      img: '../../assets/Home/yashwant2.jpg',
    },
    {
      id: 'b6',
      img: '../../assets/Home/yashwant2.jpg',
    },
    {
      id: 'b7',
      img: '../../assets/Home/yashwant2.jpg',
    },
    {
      id: 'b8',
      img: '../../assets/Home/yashwant3.jpg',
    },
    {
      id: 'b9',
      img: '../../assets/Home/yashwant2.jpg',
    },
    {
      id: 'b10',
      img: '../../assets/Home/yashwant3.jpg',
    },
    {
      id: 'b11',
      img: '../../assets/Home/yashwant2.jpg',
    },
  ];
  const _renderItem = ({item}) => {
    let width=133;
      let height=130;
    // if(item.id=='b7'){
    //    width=200;
    //    height=200;
    // }
    
    return(
      <View style={{margin:1,      
      width:width,
      height:height,
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'flex-end'}}>
          <Image source={require('../../assets/Home/yashwant2.jpg')} resizeMode={'contain'} style={{borderRadius:10,width:130,height:130}} />
      </View>
    )
  }

    return (
      <View  style={{flex:1,padding:3}}>
        <View style={{borderWidth:1,borderColor:'#757575',flexDirection:'row',alignItems:'center',borderRadius:10,width:'96%',alignSelf:'center',padding:5}}>
          <FontAwesome name={'search'} size={20} />
          <TextInput placeholder={'Search'} style={{width:'100%',marginLeft:10}} />
        </View>
        <View style={{borderWidth:.2,marginVertical:10}} />
        <View>
          
       
        </View>
        <View>
          <FlatList
          data={DATA}
          keyExtractor={(item)=>{item.id}}
          renderItem={_renderItem}
          numColumns={4}
          />
        </View>
        
      </View>
    );
  }

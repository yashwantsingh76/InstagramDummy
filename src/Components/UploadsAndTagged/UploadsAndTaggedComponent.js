import React from 'react'
import { TouchableOpacity } from 'react-native';
import { View, Text,FlatList, Image } from 'react-native'

export default function UploadsAndTaggedComponent() {
    const DATA = [
        {
          id: 'b1',
          img: '../../',
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
        }       
        
        
      ];
      const _renderItem = ({item}) => {
        let width="33.3%";
    
          let height=130;        
        return(
          <TouchableOpacity
                onPress={()=>{console.log("Hello world")}}
                style={{     
                width:width,
                marginBottom:7,
                height:height,
                justifyContent:'center',
                alignItems:'center',
                alignSelf:'flex-start'}}>
              <Image
               source={require('../../assets/Home/yashwant2.jpg')}
                resizeMode={'contain'}
                 style={{height:135}} />
          </TouchableOpacity>
        )
      }
    return (
        
            <FlatList
            style={{marginTop:20}}
            nestedScrollEnabled={true}
            data={DATA}
            keyExtractor={(item)=>{item.id}}
            renderItem={_renderItem}
            numColumns={4}
          />
        

    )
}

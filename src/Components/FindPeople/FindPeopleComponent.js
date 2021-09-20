import React from 'react'
import { View, Text,FlatList,StyleSheet,Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
export default function FindPeopleComponent() 
{
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
const _renderItem=({item})=>{
    return (<View style={styles.card}>
                <View style={styles.imageConatiner}>
                        <EvilIcons onPress={()=>{}} style={styles.closeIcon} size={24} name={'close'}>
                        </EvilIcons>
                    <Image source={require('../../assets/Home/yashwant.jpg')}
                    style={styles.image} />
                 </View>
                 <View style={styles.cardInfo}>
                     <View style={{alignItems:'center'}}>
                        <Text numberOfLines={1} style={styles.name}>Sourabh Chaturvedi</Text>
                        <Text>Followed By</Text>
                        <Text>_yashasvipandey_ + 3</Text>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Follow</Text>
                    </TouchableOpacity>
                 </View>
            </View>)
}
    return (
        <View style={styles.container}>
            <FlatList
            style={{marginLeft:10,marginTop:15}}
            horizontal={true}
            data={DATA}
            keyExtractor={(item)=>item.id}
            renderItem={_renderItem}
             />
        </View>
    )
}


const styles = StyleSheet.create({
    card:{
        height:220,
        width:160,
        borderRadius:5,
        flex:1,
        borderWidth:1.0,
        marginHorizontal:2
    },
    image:{
        height:80,
        width:80,
        borderRadius:40,
    },
    button:{
        width:150,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#1A73E8',
        borderRadius:5
        
    },
    buttonText:{
        color:'white',
        fontFamily:'Roboto',
        fontSize:14
    },
    imageConatiner:{
        flex:.5,
        justifyContent:'center',
        alignItems:'center',
    },
    cardInfo:{
        flex:.5,
        alignItems:'center',
        justifyContent:'space-around'
    },
    name:{
        fontFamily:'Roboto',
        fontSize:14,
        fontWeight:'bold',

    },
    closeIcon:{
        position:'absolute',
        top:5,
        right:5
    },

})

import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity, Alert,FlatList,Image, ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather'
import ImageContainer from '../Image/ImageContainer';
export default function FollowersListComponent({navigation}) {
    const DATA = [
        {
          id: 'b1',
          img: '../../assets/Home/yashwant.jpg',
          username:'kavi_ta784',
          name:'Kavita Rana'
        },
        {
          id: 'b2',
          img: '../../assets/Home/yashwant2.jpg',
          username:'love.guru4064',
          name:'Naman Punnu'
        },
        {
          id: 'b3',
          img: '../../assets/Home/yashwant3.jpg',
          username:'_pavan_mannepalli_',
          name:'Pavan Kumar'
        },
        {
          id: 'b4',
          img: '../../assets/Home/yashwant2.jpg',
          username:'a.lesbo._throwaway',
          name:'Lesbian ThrowAway'
        },
        {
          id: 'b5',
          img: '../../assets/Home/yashwant3.jpg',
          username:'aarogyaog',
          name:'Rakecha Aarogya'
        },
        {
          id: 'b6',
          img: '../../assets/Home/yashwant2.jpg',
          username:'abhinayphogat',
          name:'Abhinay Phogat'
        },
        {
          id: 'b7',
          img: '../../assets/Home/yashwant2.jpg',
          username:'avisek_jhaa',
          name:'Abhishek Jhaa'
        },
        {
          id: 'b8',
          img: '../../assets/Home/yashwant3.jpg',
          username:'iam_abr',
          name:'Aarav Mishra'
        },
        {
          id: 'b9',
          img: '../../assets/Home/yashwant2.jpg',
          username:'ajayarvind12',
          name:'Arvind Ajay'
        },
        {
          id: 'b10',
          img: '../../assets/Home/yashwant3.jpg',
          username:'ajaykp233',
          name:'Ajay Kirpa'
        },
        {
          id: 'b11',
          img: '../../assets/Home/yashwant2.jpg',
          username:'aki_nayak',
          name:'Abhi Nayak'
        },
        
        {
          id: 'b6',
          img: '../../assets/Home/yashwant2.jpg',
          username:'inn_akki',
          name:'Akki'
        },
        {
          id: 'b7',
          img: '../../assets/Home/yashwant2.jpg',
          username:'akashrajrathore',
          name:'Raj Rathore'
        },
        {
          id: 'b8',
          img: '../../assets/Home/yashwant3.jpg',
          username:'akhilsingh2742'
        },
        {
          id: 'b9',
          img: '../../assets/Home/yashwant2.jpg',
          username:'anilkumarsaini1912'
        },
        {
          id: 'b10',
          img: '../../assets/Home/yashwant3.jpg',
          username:'anilkumarsaini1912'
        },
        {
          id: 'b11',
          img: '../../assets/Home/yashwant2.jpg',
          username:'akhilsingh2742'
        },
        {
          id: 'b6',
          img: '../../assets/Home/yashwant2.jpg',
          username:'akashrajrathore'
        },
        {
          id: 'b7',
          img: '../../assets/Home/yashwant2.jpg',
          username:'anilkumarsaini1912',
          
        },        
      ];
    const _renderItem = ({item}) => {
        return(
            <View style={styles.imageContainer}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image
                        source={require('../../assets/Home/yashwant2.jpg')}
                        style={styles.image}
                    />
                    <View style={{marginHorizontal:10}}>
                        <Text style={styles.name,{fontWeight:'bold'}}>{item.username}</Text>
                        <Text style={styles.name}>{item.name}</Text>
                    </View>
                </View>
                {/* <View style={{flexDirection:'row',alignItems:'center'}}> */}
                    <TouchableOpacity 
                        onPress={()=>{Alert.alert('Follow','You want to Follow '+item.name)}}
                        style={styles.button}>
                        <Text>Remove</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity>
                        <Feather name={'more-vertical'} size={28}></Feather>
                    </TouchableOpacity> */}
                {/* </View> */}
            </View>
        )
    }
    return (
        
        <View>
            
            {/* <View style={styles.heading}>
                <TouchableOpacity onPress={()=>{Alert.alert("Alert","Back Button Pressed")}}>
                    <AntDesign name={'arrowleft'} size={28}></AntDesign>
                </TouchableOpacity>
              <Text style={styles.headingText}>yashwant_singh17</Text>
            </View> */}
            <ScrollView scrollEnabled={true}>
            <Text style={{fontFamily:'Roboto',fontWeight:'bold',marginHorizontal:5,fontSize:18}}>
                Categories
            </Text>
            
            
            
            <View style={{flexDirection:'row',width:'90%',alignItems:'center',alignSelf:'center',marginVertical:20}}>
            
            <ImageContainer img1={'Home/yashwant.jpg'}
            img2={'Home/yashwant.jpg'} />
                <View style={{marginHorizontal:10}}>
                    <Text style={styles.name,{fontWeight:'bold'}}>Accounts you Don't Follow Back</Text>
                    <Text>International.Khilai and 76 others</Text>
                </View>
            </View>
            <View style={{flexDirection:'row',width:'90%',alignItems:'center',alignSelf:'center',marginBottom:20}}>
            
            <ImageContainer img1={'Home/yashwant.jpg'}
            img2={'Home/yashwant.jpg'} />
                <View style={{marginHorizontal:10}}>
                    <Text style={styles.name,{fontWeight:'bold'}}>Least interacted with</Text>
                    <Text>Sell_freelancer and 76 others</Text>
                </View>
            </View>

            <View style={{height:1,backgroundColor:'#757575'}} />

            <Text style={{fontFamily:'Roboto',fontWeight:'bold',marginHorizontal:5,fontSize:18,marginVertical:20}}>
                All Followers
            </Text>
            <FlatList
            data={DATA}
            keyExtractor={(item)=>{item.id}}
            renderItem={_renderItem}
             />
             </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    heading:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10,
        marginLeft:10,
      },  headingText:{
        fontFamily:'Roboto',
        fontSize:24,
        fontWeight:'bold',
        marginLeft:10,
        
      },
      image:{
          width:60,
          height:60,
          borderRadius:30
      },
      imageContainer:{
          width:'95%',
          marginVertical:8,
          flexDirection:'row',
          alignSelf:'center',
          justifyContent:'space-between',
          alignItems:'center',
      },
      name:{
          fontFamily:'Roboto',
          fontSize:16
      },
      button:{
          width:100,
          height:30,
          justifyContent:'center',
          alignItems:'center',
          borderRadius:3,
          borderWidth:1,
          
      }
})

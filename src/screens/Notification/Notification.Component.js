import * as React from 'react';
import { Text, View,Image,ScrollView,TouchableOpacity } from 'react-native';
export default function Notification() {
  const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
    return (
      <View style={{ flex: 1, backgroundColor:'white' }}>
        <Text style={{fontSize:24,fontFamily:'Roboto',fontWeight:'bold',marginLeft:10,marginTop:5}} >Activity</Text>
        <ScrollView>
          <Text style={{fontSize:18,fontFamily:'Roboto',fontWeight:'bold',marginLeft:20,marginTop:10}}>This Week</Text>
          
          <View style={{marginHorizontal:20,marginVertical:10,flexDirection:'row',justifyContent:'space-between'}}>
            <Image source={require('../../assets/Home/yashwant.jpg')} resizeMode={'contain'}
            style={{width:40,height:40,borderRadius:200}} />
            <Text style={{marginHorizontal:10}} ><B>Tauheed001</B> and 76 other follow you but don't follow them back</Text>
          </View>

          <View style={{marginHorizontal:20,marginVertical:10,flexDirection:'row',justifyContent:'space-between',height:40}}>
            <Image source={require('../../assets/Home/yashwant2.jpg')} resizeMode={'contain'}
            style={{width:30,height:30,borderRadius:200,position:'absolute',borderColor:'white',borderWidth:1}} />
             <Image source={require('../../assets/Home/yashwant3.jpg')} resizeMode={'contain'}
            style={{width:30,height:30,borderRadius:200,position:'absolute',borderColor:'white',borderWidth:1,left:10,top:10}} />
            <Text style={{marginRight:10,marginLeft:50}} ><B>navi143_Sharukh_khan,anshumishra616</B> and <B>3 others</B> started following you</Text>
          </View>

          <View style={{marginHorizontal:20,marginVertical:10,flexDirection:'row',alignItems:'center'}}>
            <View style={{height:60,width:50,justifyContent:'center',alignItems:'center'}}>
                <Image source={require('../../assets/Home/yashwant2.jpg')} resizeMode={'contain'}
                style={{width:30,height:30,borderRadius:200,borderColor:'white',borderWidth:1,position:'absolute'}} />
                <Image source={require('../../assets/Home/yashwant3.jpg')} resizeMode={'contain'}
                style={{width:30,height:30,borderRadius:200,borderColor:'white',borderWidth:1,top:10,left:10}} />
            </View>
            <View style={{width:'75%',height:60,justifyContent:'center',alignItems:'flex-start'}}>
              <Text style={{marginRight:10,marginLeft:10}} ><B>rahulsinghrathore1627,classic_banna_ji</B> and <B>itzzzgourav</B> liked your post</Text>
            </View>

              <Image source={require('../../assets/Home/yashwant2.jpg')} resizeMode={'contain'}
              style={{width:50,height:50}}/>
          </View>
          <Text style={{fontSize:18,fontFamily:'Roboto',fontWeight:'bold',marginLeft:20,marginTop:10}}>This Month</Text>
         
          <View style={{marginHorizontal:20,marginVertical:10,flexDirection:'row',alignItems:'center'}}>
            <View style={{height:60,width:50,justifyContent:'center',alignItems:'center'}}>
              <Image source={require('../../assets/Home/profile.png')} resizeMode={'contain'}
              style={{height:40,height:40}} />
            </View>
            <View
             style={{
               width:'70%',
               height:60,
               justifyContent:'center',
               alignItems:'flex-start'
               }}>
              <Text style={{marginLeft:10,marginRight:3}} >Your contact kt is on instagram as <B>kt.9633.</B></Text>
            </View>
              <TouchableOpacity 
              onPress={()=>{}}
              style={{
                width:70,
                justifyContent:'center',
                alignItems:'center',
                height:35,
                borderRadius:5,
                backgroundColor:'#0095F6',
              }} >
                  <Text style={{color:'white'}} >Follow</Text>
              </TouchableOpacity>
          </View>

          <View style={{marginHorizontal:20,marginVertical:10,flexDirection:'row',alignItems:'center'}}>
            <View style={{height:60,width:50,justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../../assets/Home/yashwant.jpg')} resizeMode={'contain'}
            style={{width:40,height:40,borderRadius:200}} />
                </View>
            <View style={{width:'75%',height:60,justifyContent:'center',alignItems:'flex-start'}}>
              <Text style={{marginRight:10,marginLeft:10}} ><B>Sell_freelancer</B> tagged you in a post</Text>
            </View>

              <Image source={require('../../assets/Home/yashwant2.jpg')} resizeMode={'contain'}
              style={{width:50,height:50}}/>
          </View>

          <View style={{marginHorizontal:20,marginVertical:10,flexDirection:'row',alignItems:'center'}}>
            <View style={{height:60,width:50,justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../../assets/Home/yashwant2.jpg')} resizeMode={'contain'}
            style={{width:40,height:40,borderRadius:200}} />
                </View>
            <View style={{width:'75%',height:60,justifyContent:'center',alignItems:'flex-start'}}>
              <Text style={{marginRight:10,marginLeft:10}} ><B>delhisehu_bc_</B> tagged you in a reel</Text>
            </View>
              <Image source={require('../../assets/Home/yashwant3.jpg')} resizeMode={'contain'}
              style={{width:50,height:50}}/>
          </View>
        

        <View style={{marginHorizontal:20,marginVertical:10,flexDirection:'row',alignItems:'center'}}>
            <View style={{height:60,width:50,justifyContent:'center',alignItems:'center'}}>
              <Image source={require('../../assets/Home/profile.png')} resizeMode={'contain'}
              style={{height:40,height:40}} />
            </View>
            <View
             style={{
               width:'70%',
               height:60,
               justifyContent:'center',
               alignItems:'flex-start'
               }}>
              <Text style={{marginLeft:10,marginRight:3}} >Your contact kaka paras singh is on instagram as <B>kaka_paras_148116</B></Text>
            </View>
              <TouchableOpacity 
              onPress={()=>{}}
              style={{
                width:70,
                justifyContent:'center',
                alignItems:'center',
                height:35,
                borderRadius:5,
                backgroundColor:'#0095F6',
              }} >
                  <Text style={{color:'white'}} >Follow</Text>
              </TouchableOpacity>
          </View>

          <Text style={{fontSize:18,fontFamily:'Roboto',fontWeight:'bold',marginLeft:20,marginTop:10}}>Earlier</Text>
          <View style={{marginHorizontal:20,marginVertical:10,flexDirection:'row',justifyContent:'space-between'}}>
            <Image source={require('../../assets/Home/yashwant.jpg')} resizeMode={'contain'}
            style={{width:40,height:40,borderRadius:200}} />
            <Text style={{marginHorizontal:10}} ><B>Tauheed001</B> and 76 other follow you but don't follow them back</Text>
          </View>
          </ScrollView>
      </View>
    );
  }
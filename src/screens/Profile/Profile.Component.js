import * as React from 'react';
import { useState } from 'react';
import { Text, View,StyleSheet,Image, ScrollView,TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import UploadsAndTaggedContainer from '../../Components/UploadsAndTagged/UploadsAndTaggedContainer';
import UploadsAndTaggedTabsContainer from '../../Components/UploadsAndTaggedTabs/UploadsAndTaggedTabsContainer';
import FindPeopleContainer from '../../Components/FindPeople/FindPeopleContainer';
export default function Profile({navigation}) {
  const [exploreState,setExploreState] =  useState(true)

  const B = (props) => <Text style={{fontWeight: 'bold',fontSize:22}}>{props.children}</Text>

  const FindPeople = ()=>{
    if(exploreState){
      return(
        <FindPeopleContainer/>
      )
    }
  }
    return (
      <View style={{ flex: 1,backgroundColor:'white'}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}}>
            <View style={styles.heading}>
              <Text style={styles.headingText}>yashwant_singh17</Text>
            </View>            
            <View style={{flexDirection:'row',alignItems:'flex-end',marginHorizontal:10}}>
              <AntDesign style={{marginHorizontal:20}} name={'plussquareo'} size={30} ></AntDesign>
              <FontAwesome name={'bars'} size={30}></FontAwesome>
            </View>
        </View>
        <ScrollView nestedScrollEnabled={true}>
            <View style={{flexDirection:'row',paddingVertical:15,alignItems:'center',justifyContent:'space-around'}}>
              <Image source={require('../../assets/Home/profilepic.jpg')}
              resizeMode={'contain'}
              style={{width:100,height:100,borderRadius:50}} />
              <TouchableOpacity style={{alignItems:'center'}}>
                <Text><B>1</B></Text>
                <Text>Posts</Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={()=>{navigation.navigate('Details',{screen:'Followers'})}}
              style={{alignItems:'center'}}>
                <Text><B>153</B></Text>
                <Text>Followers</Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={()=>{navigation.navigate('Details',{screen:'Following'})}}
              style={{alignItems:'center'}}>
                <Text><B>210</B></Text>
                <Text>Following</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <TouchableOpacity style={{width:'80%',alignItems:'center',justifyContent:'center',height:30,borderRadius:5,borderWidth:1,borderColor:'black'}}>
              <Text style={{fontSize:16,fontFamily:'SanSerif'}}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setExploreState((exploreState)=>!exploreState)}}
            style={{width:'10%',alignItems:'center',justifyContent:'center',height:30,borderRadius:5,borderWidth:1,borderColor:'black'}}>
              <AntDesign name={'down'} size={24}></AntDesign>
            </TouchableOpacity>
            
            </View>
            {FindPeople()}
            
            <Text style={{fontSize:18,fontFamily:'Roboto',fontWeight:'bold',marginLeft:10,marginTop:10}}>Story Highlights</Text>
            <Text style={{fontSize:16,fontFamily:'Roboto',marginLeft:10}}>Keep Your favourite stories on your profile</Text>
            
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} nestedScrollEnabled={true} style={{width:'95%',alignSelf:'center'}}>
              <TouchableOpacity style={styles.stories}>
                <AntDesign name={'plus'} size={24}></AntDesign>
              </TouchableOpacity>
              <TouchableOpacity style={styles.stories}></TouchableOpacity>
              <TouchableOpacity style={styles.stories}></TouchableOpacity>
              <TouchableOpacity style={styles.stories}></TouchableOpacity>
              <TouchableOpacity style={styles.stories}></TouchableOpacity>
              <TouchableOpacity style={styles.stories}></TouchableOpacity>
              <TouchableOpacity style={styles.stories}></TouchableOpacity>
            </ScrollView>
            <UploadsAndTaggedTabsContainer
                       
            />
            
        </ScrollView>
      </View>
    );
  }

const styles = StyleSheet.create({
  heading:{
    justifyContent:'space-between',
    alignItems:'center'
    
  },
  uploadAndMoreIcon:{},
  headingText:{
    fontFamily:'Roboto',
    fontSize:24,
    fontWeight:'bold',
    marginLeft:10,
    marginTop:10
  },

  pnglogos:{
    width:30,
    height:30
  },
  stories:{
    height:60,
    width:60,
    marginHorizontal:15,
    borderRadius:30,
    borderColor:'black',
    marginTop:10,
    backgroundColor:'#DDE1E3',
    borderWidth:1.5,
    justifyContent:'center',
    alignItems:'center',

    
  }


})

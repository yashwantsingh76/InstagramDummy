import * as React from 'react';
import { Text, View ,Image} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from '../Home/Home.Component';
import Reels from '../Reels/Reels.Component';
import Profile from '../Profile/Profile.Component';
import Search from '../Search/Search.Component';
import Notification from '../Notification/Notification.Component';


const Tab = createBottomTabNavigator();

export default function BottomTabNavigationComponent({navigation}) {

  return (
      <Tab.Navigator
      initialRouteName={'Home'}
      >
        <Tab.Screen 
        name="Home" component={Home}
        options={{
          tabBarLabel: (focused)=>{
            tabBarLabel:false
          },
          headerShown:false,
          tabBarIcon: ({ color, size,focused }) => (
            <View style={{justifyContent:'center',alignItems:'center',}}>
              {focused?(<Image source={require('../../assets/Home/homelogo.png')}
                resizeMode='contain'
                style={{width:50,height:50}} />):(
                  <Image source={require('../../assets/Home/homeloginactive.png')}
                resizeMode='contain'
                style={{width:50,height:50}} />
                )}
            </View>
          ),
        }} 
         />


        <Tab.Screen
        options={{
          tabBarLabel: (focused)=>{
            tabBarLabel:false
          },
          headerShown:false,
          tabBarIcon: ({ color, size,focused }) => (
            <View style={{justifyContent:'center',alignItems:'center',}}>
              {focused?(<Image source={require('../../assets/Home/searchinactive.png')}
                resizeMode='contain'
                style={{width:30,height:30}} />):(
                  <Image source={require('../../assets/Home/searchactive.png')}
                resizeMode='contain'
                style={{width:25,height:25}} />
                )}
            </View>
          ),
        }} 
         name="Search" component={Search} />


        
<Tab.Screen
        options={{
          tabBarLabel: (focused)=>{
            tabBarLabel:false
          },
          headerShown:false,
          tabBarIcon: ({ color, size,focused }) => (
            <View style={{justifyContent:'center',alignItems:'center'}}>
              {focused?(<Image source={require('../../assets/Home/reels.png')}
                resizeMode='contain'
                style={{width:40,height:40}} />):(
                  <Image source={require('../../assets/Home/reels.png')}
                resizeMode='contain'
                style={{width:35,height:35}} />
                )}
            </View>
          ),
        }} 
         name="Reels" component={Reels} />


        <Tab.Screen
        options={{
          tabBarLabel: (focused)=>{
            tabBarLabel:false
          },
          headerShown:false,
          tabBarIcon: ({ color, size,focused }) => (
            <View style={{justifyContent:'center',alignItems:'center',}}>
              {focused?(<AntDesign name={'heart'} size={24}></AntDesign>
):(
  <AntDesign name={'hearto'} size={24}></AntDesign>

                )}
            </View>
          ),
        }} 
         name="Notification" component={Notification} />

      <Tab.Screen
          options={{
          tabBarLabel: (focused)=>{
            tabBarLabel:false
          },
          headerShown:false,
          tabBarIcon: ({ color, size,focused }) => (
            <View style={{justifyContent:'center',alignItems:'center'}}>
              {focused?(<Image source={require('../../assets/Home/yashwant.jpg')}
                
                style={{width:30,height:30,borderRadius:15}} />):(
                  <Image source={require('../../assets/Home/yashwant.jpg')}
                style={{width:30,height:30,borderRadius:15}} />
                )}
            </View>
          ),
        }} 
         name="Profile"
         component={Profile} />


      </Tab.Navigator>
    
  );
}
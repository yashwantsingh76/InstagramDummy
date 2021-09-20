import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import  Entypo  from 'react-native-vector-icons/Entypo'
import UploadsAndTaggedContainer from '../UploadsAndTagged/UploadsAndTaggedContainer';

const Tab = createMaterialTopTabNavigator();
export default function UploadsAndTaggedTabsComponent() {
    
  return (
        <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          tabBarLabelStyle: { fontSize: 12 },
        }} >
            <Tab.Screen
             tabBarLabel={false}
             tabBarIcon={(tintColor, focused)=>{ 
              return (<Entypo  
                  name={focused ? 'home' : 'home'}  
                  size={25}  
              />) }}
              
            name="Upload" component={UploadsAndTaggedContainer} />
            <Tab.Screen
            
            tabBarIcon={
              (focused,color)=>{
                return(
                  <Entypo name={'home'} size={24}></Entypo>
                )
              }}
              options={{tabBarLabel:'Tags'}}
            name="Tagged" component={UploadsAndTaggedContainer} />
        </Tab.Navigator>
  );
}


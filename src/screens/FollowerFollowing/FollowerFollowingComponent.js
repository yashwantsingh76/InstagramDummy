import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Alert} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import FollowingListContainer from '../../Components/FollowingList/FollowingListContainer';
import FollowersListContainer from '../../Components/FollowersList/FollowersListContainer';

const Tab = createMaterialTopTabNavigator();
export default function FollowerFollowingComponent({route,navigation}) {
    console.log("In COmponent",route);
    return (
        <>
        <View style={styles.heading}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Bottom')}}>
                    <AntDesign name={'arrowleft'} size={28}></AntDesign>
                </TouchableOpacity>
              <Text style={styles.headingText}>yashwant_singh17</Text>
            </View>
        <Tab.Navigator
        initialRouteName={route.params.screen}
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
              
            name="Following" component={FollowingListContainer} />
            <Tab.Screen
            
            tabBarIcon={
              (focused,color)=>{
                return(
                  <Entypo name={'home'} size={24}></Entypo>
                )
              }}
              options={{tabBarLabel:'Followers'}}
            name="Followers" component={FollowersListContainer} />
        </Tab.Navigator>
        </>
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
        
      }
})

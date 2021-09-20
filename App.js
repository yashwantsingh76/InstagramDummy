// import * as React from 'react';
// import { Text, View ,Image} from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import Home from './src/screens/Home/Home.Component';
// import Reels from './src/screens/Reels/Reels.Component';
// import Profile from './src/screens/Profile/Profile.Component';
// import Search from './src/screens/Search/Search.Component';
// import Notification from './src/screens/Notification/Notification.Component';

// //  const HomeActiveLogo  = './src/assets/Home/homelogo.png';
// //  const HomeInactiveLogo =  './src/assets/Home/homeloginactive.png';
// const Tab = createBottomTabNavigator();

// export default function App() {

//   return (
//     <NavigationContainer >
//       <Tab.Navigator
//       initialRouteName={'Reels'}
//       >
//         <Tab.Screen 
//         name="Home" component={Home}
//         options={{
//           tabBarLabel: (focused)=>{
//             tabBarLabel:false
//           },
//           headerShown:false,
//           tabBarIcon: ({ color, size,focused }) => (
//             <View style={{justifyContent:'center',alignItems:'center',}}>
//               {focused?(<Image source={require('./src/assets/Home/homelogo.png')}
//                 resizeMode='contain'
//                 style={{width:50,height:50}} />):(
//                   <Image source={require('./src/assets/Home/homeloginactive.png')}
//                 resizeMode='contain'
//                 style={{width:50,height:50}} />
//                 )}
          
//             </View>
//           ),
//           tabBarShowLabel:false
//         }} 
//          />
//         <Tab.Screen
//         name="Search" component={Search}
//         options={{
//           tabBarLabel: (focused)=>{
//             tabBarLabel:false
//           },
//           headerShown:false,
//           tabBarIcon: ({ color, size,focused }) => (
//             <View style={{justifyContent:'center',alignItems:'center',}}>
//               {focused?(<Image source={require('./src/assets/Home/searchinactive.png')}
//                 resizeMode='contain'
//                 style={{width:30,height:30}} />):(
//                   <Image source={require('./src/assets/Home/searchactive.png')}
//                 resizeMode='contain'
//                 style={{width:25,height:25}} />
//                 )}
//             </View>
//           ),
//         }} 
//           />
// <Tab.Screen
//         options={{
//           tabBarLabel: (focused)=>{
//             tabBarLabel:false
//           },
//           headerShown:false,
//           tabBarIcon: ({ color, size,focused }) => (
//             <View style={{justifyContent:'center',alignItems:'center',}}>
//               {focused?(<Image source={require('./src/assets/Home/reels.png')}
//                 resizeMode='contain'
//                 style={{width:40,height:40}} />):(
//                   <Image source={require('./src/assets/Home/reels.png')}
//                 resizeMode='contain'
//                 style={{width:35,height:35}} />
//                 )}
//             </View>
//           ),
//         }} 
//          name="Reels" component={Reels} />


//         <Tab.Screen
//         options={{
//           tabBarLabel: (focused)=>{
//             tabBarLabel:false
//           },
//           headerShown:false,
//           tabBarIcon: ({ color, size,focused }) => (
//             <View style={{justifyContent:'center',alignItems:'center',}}>
//               {focused?(<Image source={require('./src/assets/Home/notificationactive.png')}
//                 resizeMode='contain'
//                 style={{width:30,height:30}} />):(
//                   <Image source={require('./src/assets/Home/notificationinactive.png')}
//                 resizeMode='contain'
//                 style={{width:60,height:60}} />
//                 )}
//             </View>
//           ),
//         }} 
//          name="Notification" component={Notification} />

//       <Tab.Screen
//         options={{
//           tabBarLabel: (focused)=>{
//             tabBarLabel:false
//           },
//           headerShown:false,
//           tabBarIcon: ({ color, size,focused }) => (
//             <View style={{justifyContent:'center',alignItems:'center'}}>
//               {focused?(<Image source={require('./src/assets/Home/yashwant.jpg')}
//                 resizeMode='contain'
//                 style={{width:30,height:30,borderRadius:1500}} />):(
//                   <Image source={require('./src/assets/Home/yashwant.jpg')}
//                 resizeMode='contain'
//                 style={{width:30,height:30,borderRadius:1500}} />
//                 )}
//             </View>
//           ),
//         }} 
//          name="Profile" component={Profile} />


//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

import React from 'react'
import { View, Text } from 'react-native'
import NavigationComponent from './src/screens/Navigation/NavigationComponent'

export default function App() {
  return (
    <NavigationComponent/>
  )
}

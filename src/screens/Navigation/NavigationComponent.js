import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigationContainer from '../BottomTabNavigation/BottomTabNavigationContainer';
import FollowerFollowingContainer from '../FollowerFollowing/FollowerFollowingContainer'

const Stack = createNativeStackNavigator();
export default class NavigationComponent extends Component {
    render() {
        return (
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{
                            headerShown:false
                        }} initialRouteName="Bottom">
                        <Stack.Screen  name="Bottom"  component={BottomTabNavigationContainer} />
                        <Stack.Screen name="Details" component={FollowerFollowingContainer} />
                        
                    </Stack.Navigator>
                </NavigationContainer>
        )
    }
}

import React from 'react'
import FollowerFollowingComponent from './FollowerFollowingComponent'

export default function FollowerFollowingContainer({route,navigation}) {
    console.log("In Container"+route);
    return (
        <FollowerFollowingComponent navigation={navigation} route={route}/>
    )
}

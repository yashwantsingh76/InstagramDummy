import React from 'react'
import { View, Image } from 'react-native'

export default function ImageComponent({props}) {
     console.log("component is : ",props.img1);
      let img1 = require("C:/Users/Yashwant/OneDrive/Desktop/InstagramDummy/src/assets/Home/yashwant.jpg")
    
     return (       
        <View style={{width:70,height:65}}>
            <Image
                source={require('../../assets/Home/yashwant.jpg')}
                style={{width:50,height:50,borderRadius:30,position:'absolute'}}
                 />
            <Image
                source={require('../../assets/Home/yashwant2.jpg')}
                style={{width:50,height:50,borderRadius:30,right:0,top:15,borderWidth:2,borderColor:'white',position:'absolute'}}
             />
    </View>
    )
}

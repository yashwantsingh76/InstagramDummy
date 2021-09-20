import * as React from 'react';
import { Text, View,Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import {AntDesign} from 'react-native-vector-icons/'

export default function Home() {
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          img: '../../assets/Home/yashwant.jpg',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          img: '../../assets/Home/yashwant2.jpg',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          img: '../../assets/Home/yashwant3.jpg',
        },
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28a',
          img: '../../assets/Home/yashwant2.jpg',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fd91aa97f63',
          img: '../../assets/Home/yashwant3.jpg',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e9d72',
          img: '../../assets/Home/yashwant2.jpg',
        },
      ];
    const renderData=(item)=>{
      {console.log(typeof(item.item.img))}
        return (
            <View style={{marginHorizontal:5,borderWidth:2,borderColor:'#F69148',height:80,width:80,justifyContent:'center',alignItems:'center',borderRadius:40}} > 
            <Image source={ require('../../assets/Home/yashwant2.jpg')} 
            resizeMode={'contain'}
            style={{width:70,height:70,borderRadius:500}} />
            </View>
        )
    }
    return (
        <View style={{backgroundColor:'white',flex:1}}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',backgroundColor:'white'}}>
            <Image resizeMode={'contain'}
            style={{width:150,height:50}}
             source={require('../../assets/Home/InstagramText.png')} />
            <TouchableOpacity>
                <Image resizeMode={'contain'}
                            style={{width:100,height:50,position:'absolute',right:10,top:-25}}
                            source={require('../../assets/Home/upload.png')} />
            </TouchableOpacity>
                <Image resizeMode={'contain'}
                style={{width:80,height:30,position:'absolute',right:-15}}
                source={require('../../assets/Home/messagelogo.png')} />
        </View>
        <View>
            <FlatList 
            contentContainerStyle={{alignSelf: 'flex-start'}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={DATA}
            keyExtractor={item=>item.id}
            renderItem={renderData} />
        </View>
            <View style={{borderBottomColor:'#E1ECF4',borderBottomWidth:1,marginVertical:10}} />
        
        <ScrollView>
            <View style={{height:480,width:'100%',marginVertical:20}}>
                <View style={{height:40,alignItems:'center',flexDirection:'row'}}>
                    <Image source={require('../../assets/Home/yashwant.jpg')}
                    resizeMode={'contain'}
                    style={{width:30,height:30,marginLeft:10,borderRadius:1500}}  />
                    <Text style={{fontSize:16,fontFamily:'Roboto',marginLeft:10}}>Yashwant singh</Text>
                    <Image source={require('../../assets/Home/more.png')}
                    resizeMode={'contain'}
                    style={{width:30,height:30,marginLeft:10,borderRadius:1500,position:'absolute',right:0}}  />
                </View>
                <Image source={require('../../assets/Home/yashwant.jpg')}
                    resizeMode={'contain'}
                    style={{height:400,width:'100%'}}  />
                <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                    <View style={{flexDirection:'row'}}>
                      <Image 
                        source={require('../../assets/Home/hearticon.png')}
                        resizeMode={'contain'}
                        style={{width:35,height:35}}
                        />
                      <Image 
                        source={require('../../assets/Home/commetlogofile.png')}
                        resizeMode={'contain'}
                        style={{width:35,height:35}}
                        />
                      <Image 
                        source={require('../../assets/Home/replytopost.png')}
                        resizeMode={'contain'}
                        style={{width:35,height:35}}
                        />                      
                    </View>
                    <View>
                      <Image 
                        source={require('../../assets/Home/save.png')}
                        resizeMode={'contain'}
                        style={{width:45,height:45,bottom:5}}
                        />
                    </View>
                    
                </View> 
                
            </View>
            <View style={{height:480,width:'100%',marginVertical:20}}>
                <View style={{height:40,alignItems:'center',flexDirection:'row'}}>
                    <Image source={require('../../assets/Home/yashwant2.jpg')}
                    resizeMode={'contain'}
                    style={{width:30,height:30,marginLeft:10,borderRadius:1500}}  />
                    <Text style={{fontSize:16,fontFamily:'Roboto',marginLeft:10}}>Yashwant singh</Text>
                    <Image source={require('../../assets/Home/more.png')}
                    resizeMode={'contain'}
                    style={{width:30,height:30,marginLeft:10,borderRadius:1500,position:'absolute',right:0}}  />
                </View>
                <Image source={require('../../assets/Home/yashwant2.jpg')}
                    resizeMode={'contain'}
                    style={{height:400,width:'100%'}}  />
                <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                    <View style={{flexDirection:'row'}}>
                      <Image 
                      source={require('../../assets/Home/hearticon.png')}
                      resizeMode={'contain'}
                      style={{width:35,height:35}}
                      />
                      <Image 
                      source={require('../../assets/Home/commetlogofile.png')}
                      resizeMode={'contain'}
                      style={{width:35,height:35}}
                      />
                      <Image 
                      source={require('../../assets/Home/replytopost.png')}
                      resizeMode={'contain'}
                      style={{width:35,height:35}}
                      />
                      
                      
                    </View>
                    <View>
                      <Image 
                        source={require('../../assets/Home/save.png')}
                        resizeMode={'contain'}
                        style={{width:45,height:45,bottom:5}}
                        />
                    </View>
                    
                </View> 
                
            </View>
            <View style={{height:480,width:'100%',marginVertical:20}}>
                <View style={{height:40,alignItems:'center',flexDirection:'row'}}>
                    <Image source={require('../../assets/Home/yashwant.jpg')}
                    resizeMode={'contain'}
                    style={{width:30,height:30,marginLeft:10,borderRadius:1500}}  />
                    <Text style={{fontSize:16,fontFamily:'Roboto',marginLeft:10}}>Yashwant singh</Text>
                    <Image source={require('../../assets/Home/more.png')}
                    resizeMode={'contain'}
                    style={{width:30,height:30,marginLeft:10,borderRadius:1500,position:'absolute',right:0}}  />
                </View>
                <Image source={require('../../assets/Home/yashwant3.jpg')}
                    resizeMode={'contain'}
                    style={{height:400,width:'100%'}}  />
                <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                    <View style={{flexDirection:'row'}}>
                      <Image 
                      source={require('../../assets/Home/hearticon.png')}
                      resizeMode={'contain'}
                      style={{width:35,height:35}}
                      />
                      <Image 
                      source={require('../../assets/Home/commetlogofile.png')}
                      resizeMode={'contain'}
                      style={{width:35,height:35}}
                      />
                      <Image 
                      source={require('../../assets/Home/replytopost.png')}
                      resizeMode={'contain'}
                      style={{width:35,height:35}}
                      />
                      
                      
                    </View>
                    <View>
                      <Image 
                        source={require('../../assets/Home/save.png')}
                        resizeMode={'contain'}
                        style={{width:45,height:45,bottom:5}}
                        />
                    </View>
                    
                </View> 
                
            </View>
        </ScrollView>
        </View>
    );
  }
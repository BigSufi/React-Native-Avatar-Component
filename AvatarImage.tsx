import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ImagePicker from 'react-native-image-crop-picker';

const AvatarImage = () => {
  const [select, setSelectImage] = useState(require('../assets/images/Ellipse.png'))
  const chooseImageFromGallery = () =>{
    ImagePicker.openPicker({
        cropping: true,
    }).then(image => {
        setSelectImage(image.path)
    })
  }

 
  return (
    <View style = {styles.container}>

    <Image style = {styles.avImage}
     source={typeof select === 'string' ? { uri: select } : select}
    />

        <TouchableOpacity style = {styles.uploadContainer} onPress={chooseImageFromGallery} >
            <Image
                source={require('../assets/images/Upload.png')}
            />
        </TouchableOpacity>

    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        marginTop:80,
        // backgroundColor:'yellow',
        alignItems:'center',

    },

    avImage:{
        borderRadius: 70,
        height:140,
        width:140,
    },

    uploadContainer:{
        position:'absolute',
        bottom:0,
        right:129,
    },

})



export default AvatarImage

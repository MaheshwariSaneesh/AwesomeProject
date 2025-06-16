import { StyleSheet, Text, View ,Button,TextInput} from 'react-native'
import React, { useState } from 'react'

const Child = ({sendDataToParent,data}) => {
  const [childData,setChildDAta]= useState([])
  return (
    <View style={{justifyContent:"center",alignItems:"center"}}>
        <TextInput value={childData} 
        onChangeText={(text)=>setChildDAta(text)}
        style={{height:40, width:200, backgroundColor:'red'}} />
  <Button title="childValue" onPress={()=>sendDataToParent(childData)}/>
      {/* <Button title="childValue" onPress={()=>sendDataToParent('sunny')}/> */}
    </View>
  )
}

export default Child

const styles = StyleSheet.create({})
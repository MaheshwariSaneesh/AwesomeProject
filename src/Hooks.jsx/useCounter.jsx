import { StyleSheet, Text, View } from 'react-native'
import React  ,{useState}from 'react'

const useCounter = () => {
    const [count,setCount]=useState(0)
    const  increment=()=>{
        setCount(count+1)
    }
    return{
        count, 
        increment

    }

}

export default useCounter

const styles = StyleSheet.create({})
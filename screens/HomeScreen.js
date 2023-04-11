import { View, Text, Image , TextInput, ScrollView} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import {  SparklesIcon as SparklesIconOutline ,SparklesIcon , SearchIcon, UserIcon, ChevronDownIcon} from "react-native-heroicons/outline";
import Categories from "../components/Categories"
const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    },[])
  
  return (
    <SafeAreaView className="bg-white pt-2 ">
        {/* header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
            <Image 
                source={{
                    uri: "https://links.papareact.com/wru"
                }}
                className="h-7 w-7 bg-gray-300 rounded-full"
            />

            <View className="flex-1">
                <Text className="font-bold text-gray-400 text-xs">
                    Deliver Now!
                </Text>
                <Text  className="font-bold text-xl">
                    Current Location
                    <ChevronDownIcon  size={20} color="#000"/>
                </Text>
            </View>
            <UserIcon size={25} color="#000"/>
        </View>

        {/* search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4 pb-5">
            <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                <SparklesIcon color="gray" size={20}/>
                <TextInput placeholder="Searching...."
                    keyboardType="default"
                />
            </View>
            <SparklesIconOutline />
        </View>
        {/* Bofy */}

    </SafeAreaView>
  )
}

export default HomeScreen
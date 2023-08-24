import { View, Text } from 'react-native'
import React from 'react'

export default function Footer() {
    
    const currentYear = new Date().getFullYear();

    return (
        <View className="flex  left-0 buttom-0 w-screen h-12 bg-[#164B60] justify-center items-center">
            <Text className="text-black text-base">Creative jungle - {currentYear} </Text>
        </View>
    )
}
import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { XMarkIcon } from 'react-native-heroicons/outline';
import { styles } from '../theme';

export default function Card({index, item, onDelete  }) {
    const handleDeleteClick = () => {
        onDelete(item.id);
    };
    return (
        <View className="flex w-screen h-64 justify-start items-center mb-3" key={index}>
            <View className="flex flex-1 w-11/12 h-64 justify-center items-center pb-4 bg-white relative rounded-t-3xl rounded-b-3xl">
                <TouchableOpacity 
                className="absolute top-4 right-4 z-20 rounded-full bg-white h-6 w-6 items-center justify-center"
                onPress={handleDeleteClick}
                >
                    <XMarkIcon color="#1B6B93" size={20} strokeWidth={2} />
                </TouchableOpacity>

                <View className="absolute top-0 left-0 w-full h-24 bg-[#1B6B93] z-10 rounded-t-3xl">
                </View>
                <View className="h-24 w-24 bg-white top-8 absolute z-20 rounded-full">
                    <Image
                        source={require('../../assets/images/Food.jpg')}
                        className="w-full h-full rounded-full"
                    />
                </View>
                <View className="absolute w-11/12 top-32 justify-center items-center">
                    <Text className="text-center text-sm font-medium text-[#1B6B93]" >{item.title}</Text>
                </View>
                <View className="absolute w-full top-44 pl-4 pr-4 justify-center items-center">
                    <Text className="text-justify -tracking-wide text-[11px] font-normal text-[#1B6B93]">{item.body}</Text>
                </View>
            </View>
        </View>
    )
}
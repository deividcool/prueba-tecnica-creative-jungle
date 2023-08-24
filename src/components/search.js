import { View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { XMarkIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { styles } from '../theme';

export default function Search({ setSearchText }) {
    const [inputText, setInputText] = useState('');

    const handleSearch = (text) => {
        setInputText(text); 
        const numericValue = parseInt(text);  
        if (!isNaN(numericValue)) {
            setSearchText(numericValue); 
        } else {
            setSearchText('');  
        }
    };

    const clearSearch = () => {
        setInputText('');
        setSearchText('');
    };

    return (
        <View className="flex mt-2 mb-2 w-screen justify-start items-center">
            <View className="mb-15 mx-2 w-80 flex-row justify-between items-center border border-[#4FC0D0] rounded-full">
                <TextInput
                    onChangeText={handleSearch}
                    value={inputText} 
                    placeholder='Buscar'
                    placeholderTextColor={styles.text}
                    className="pb-1 pl-6 flex-1 text-base text-[#164B60] tracking-wider"
                />
                <TouchableOpacity
                    onPress={clearSearch}
                    className="p-2 m-1"
                >
                    {inputText ? (
                        <XMarkIcon color="#4FC0D0" size={30} />
                    ) : (
                        <MagnifyingGlassIcon color="#4FC0D0" size={30} />
                    )}
                </TouchableOpacity>
            </View>
        </View>
    )
}
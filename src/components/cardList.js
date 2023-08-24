import { View, Image, Text, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { XMarkIcon } from 'react-native-heroicons/outline';
import Card from "./card";


export default function CardList({ data, setData, searchText }) {

    const filteredData = searchText
        ? data.filter(item => item.id === searchText)
        : data;
    const handleDelete = async (itemId) => {
        try {
            const updatedData = data.filter(item => item.id !== itemId);
            setData(updatedData);
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };
    return (
        <ScrollView
            vertical
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 2 }}
        >
            {
                filteredData.map((item, index) => {
                    return (
                        <Card key={index} item={item} onDelete={() => handleDelete(item.id)} />
                    )
                })
            }
        </ScrollView>
    );

}
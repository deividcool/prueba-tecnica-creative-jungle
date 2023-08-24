import { View, Text, Platform, TouchableOpacity, SafeAreaView, ScrollView, Image, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../theme/index";
import { fetchDataCard } from "../utils/api/jsonplaceholder";

import Search from "../components/search";
import Footer from "../components/footer";
import Card from "../components/card";
import CardList from "../components/cardList";




const ios = Platform.OS == "ios";

export default function HomeScreen() {
    const [dataCard, setDataCard] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getDataCards();
    }, []) 

    const getDataCards = async () => {
        const data = await fetchDataCard();
        setDataCard(data); 
        setLoading(false);
    }

    const filteredData = dataCard.filter(item => item.id.toString().includes(searchText));


    return (
        <View className="flex bg-neutral-200 justify-center items-center">
            <SafeAreaView className={ios ? 'mt-5' : 'mt-6'}>
                <View className="flex mt-3 bg-neutral-200 justify-center items-center">
                    <Image source={require("../../assets/images/IconLogo.png")} />
                </View>
                <Search setSearchText={setSearchText} />
                <CardList data={filteredData} setData={setDataCard} searchText={parseInt(searchText)} />   
                <Footer />
            </SafeAreaView>
        </View>
    );
}



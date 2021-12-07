
import React, { useEffect, useState } from 'react';
import {
    FlatList,
    View,
} from 'react-native';
import styles from "./MainScreenStyle"
import InputCard from '../components/InputCard/InputCard';
import ProductCard from '../components/ProductCard/ProductCard';
import SortButton from '../components/SortButton/SortButton';


const Main = () => {

    const [data, setData] = useState([]); //data array used to store products
    const [sort, setSort] = useState("history"); //sort state used to determine which sort button was clicked


    //each time new data is added, 
    //I reorder according to the current sorting state
    useEffect(() => {
        sortData(sort)
    }, [data])

    // productcard used to show name and price value in flatlist
    const renderItem = ({ item }) => (
        <ProductCard data={item} />
    )


    // sortdata function is sorting data according to which button clicked
    // I used sort function of js to sort data
    // then set it to data array again and set button name into sort state
    const sortData = (text) => {
        if (text === "increase") {
            const sorted = data.sort((a, b) => a.price - b.price);
            setData(sorted);
        } else if (text === "decrease") {
            const sorted = data.sort((a, b) => b.price - a.price);
            setData(sorted);
        } else {
            const sorted = data.sort((a, b) => b.date - a.date);
            setData(sorted);
        }
        setSort(text)
    }

    //I called sortbutton 3 times in header view and I used flatlist to render product values
    //Inputcard has 2 inputs for name and price value and also have add button
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <SortButton title="Artan Fiyat" clicked={sort === "increase" ? true : false} onPress={() => sortData("increase")} />
                <SortButton title="Azalan Fiyat" clicked={sort === "decrease" ? true : false} onPress={() => sortData("decrease")} />
                <SortButton title="Tarih" clicked={sort === "history" ? true : false} onPress={() => sortData("history")} />
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
            <InputCard data={data} setData={setData} />
        </View>
    );
};

export default Main;
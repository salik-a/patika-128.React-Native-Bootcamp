import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
} from 'react-native';
import styles from "./InputCardStyle"
import Input from '../Input/Input';
import AddButton from '../AddButton/AddButton';

const InputCard = ({ data, setData }) => {

    //inputcard has data and setData props and I used this to set product object into data array

    const [name, setName] = useState();//name state used to get and store name value from name input
    const [price, setPrice] = useState();//price state used to get and store price value from price input

    //when we clicked add button handlepress function works
    //we keep name, price, date value in object
    //and if they are not empty I set this object into data array 
    const handleAddPress = () => {
        const product = {
            name: name,
            price: price,
            date: new Date()
        }
        if (name !== "" && price !== "") {
            setData([{ ...product }, ...data])
        }
    }

    //inputcard has 2 input to get name and price value and 1 add button

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Name</Text>
                <Input onChangeText={setName} value={name} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Price</Text>
                <Input onChangeText={setPrice} value={price} />
            </View>
            <AddButton title="Add" onPress={handleAddPress} />
        </SafeAreaView>
    );
};

export default InputCard;
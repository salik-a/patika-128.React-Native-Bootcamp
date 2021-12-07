import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    TextInput
} from 'react-native';
import styles from "./InputStyle"

const Input = ({ value, onChangeText }) => {

    //Input has value and onchangetext props
    //onChangeText set value into states
    return (
        <SafeAreaView style={styles.container}  >
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={value}
            />
        </SafeAreaView>
    );
};

export default Input;
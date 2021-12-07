import React from 'react';
import {
    Text,
    TouchableOpacity
} from 'react-native';
import styles from "./AddButtonStyle"

const AddButton = ({ title, onPress }) => {

    //addButton has title and onPress props
    //title shows button name and onPress perform the function of the button

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

export default AddButton;
import React from 'react';
import {
    TouchableOpacity,
    Text,
    View,
} from 'react-native';
import styles from "./SortButtonStyle"

const SortButton = ({ title, onPress, clicked }) => {

    //sort button has title, onpress and clicked props
    //title shows button name
    //clicked value shows this button clicked or not
    //if button clicked shows primary style if not shows secondary style
    const theme = clicked ? "primary" : "secondary";
    return (
        <TouchableOpacity style={styles[theme].container} onPress={onPress}>
            <Text style={styles[theme].title}>{title}</Text>
        </TouchableOpacity>
    );
};

export default SortButton;
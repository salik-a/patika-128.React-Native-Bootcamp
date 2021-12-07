import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import styles from "./ProductCardStyle"

const ProductCard = ({ data }) => {

    //productcard gets data value from flatlist 
    //and shows name and price value side by side
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.price}>{data.price} TL</Text>
            </View>
        </View>
    );
};

export default ProductCard;
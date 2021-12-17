import React, { useMemo } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  FlatList,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "./MovieCardStyle";

const MovieCard = ({ data, onSelect }) => {
  const commaSeperator = () => <Text style={styles.genre}>, </Text>;

  return useMemo(
    () => (
      <TouchableWithoutFeedback onPress={onSelect}>
        <View>
          <ImageBackground
            source={require("../../assets/movie.png")}
            resizeMode="cover"
            style={styles.container}
            imageStyle={{ borderRadius: 20 }}>
            <View style={styles.half}>
              <Text style={styles.name}>{data.name}</Text>
              <View style={styles.genres}>
                <FlatList
                  ItemSeparatorComponent={commaSeperator}
                  horizontal={true}
                  data={data.genre}
                  renderItem={({ item, index }) => (
                    <Text style={styles.genre} key={index}>
                      {item}
                    </Text>
                  )}
                />
              </View>
              <Text style={styles.brief} numberOfLines={2}>
                {data.brief} ...
              </Text>
              <View style={styles.row}>
                <View style={styles.card}>
                  <Icon name="movie-open" size={18} color="white" />
                  <Text style={styles.director}>{data.director}</Text>
                </View>
                <View style={styles.card}>
                  <Icon name="star" size={18} color="rgba(251, 211, 0, 1)" />
                  <Text style={styles.rate}>{data.rate}</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    ),
    [data, onSelect]
  );
};

export default MovieCard;

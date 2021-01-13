import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import CarItem from '../CarComponent/index';
import styles from './styles';
import cars from './cars';

const CarsList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        // data is just what you want to render(multiple items)
        data={cars}
        // how to render a particular item
        renderItem={({ item }) => <CarItem cars={item} />}
        snapToAlignment={'start'}
        // how fast the scroll goes
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
        // disables scroll indicator
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CarsList;

import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Button from '../Button/index';
import styles from './styles';

const CarItem = (props) => {
  const { name, tagline, image, taglineCTA } = props.cars;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.img} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagline} <Text style={styles.subTitleCTA}> {taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          type="primary"
          content="Custom Order"
          onPress={() => {
            console.warn('custom order was pressed');
          }}
        />
        <Button
          type="fucker"
          content="Existing inventory"
          onPress={() => {
            console.warn('existing inventory was pressed');
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;

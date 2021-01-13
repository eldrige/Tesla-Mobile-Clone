import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const Button = (props) => {
  const { type, content, onPress } = props;
  console.log(type);
  const backgroundColor = type === 'primary' ? '#171A20' : 'white';
  const textColor = type === 'primary' ? 'white' : '#171A20';

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => {
          onPress();
        }}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

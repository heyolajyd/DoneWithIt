import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Text from './Text';

const PickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{item.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    paddingVertical: 15,
  },
});

export default PickerItem;

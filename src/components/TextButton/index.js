import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const TextButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.textNext}>Selanjutnya</Text>
    </TouchableOpacity>
    
  );
};

export default TextButton;

const styles = StyleSheet.create({
  textNext: {
    fontSize: 14,
    fontFamily: 'Inter_SemiBold',
    color: '#1B578C',
    marginRight: 11,
  },
});
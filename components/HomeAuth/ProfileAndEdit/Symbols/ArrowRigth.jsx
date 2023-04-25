import React from 'react';
import { View, StyleSheet } from 'react-native';

const ArrowBorderRight = () => {
  return (
    <View style={styles.container}>
      <View style={styles.arrow}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRightWidth: 2,
    borderColor: 'black',
    paddingRight: 10,
    justifyContent: 'center',
  },
  arrow: {
    borderTopWidth: 10,
    borderRightWidth: 0,
    borderBottomWidth: 10,
    borderLeftWidth: 10,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'black',
    position: 'absolute',
    right: -8,
  },
});

export default ArrowBorderRight;

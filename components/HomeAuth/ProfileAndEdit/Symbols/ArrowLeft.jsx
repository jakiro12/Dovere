import React from 'react';
import { View, StyleSheet } from 'react-native';

const ArrowBorderLeft = () => {
  return (
    <View style={styles.container}>
      <View style={styles.arrow}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderLeftWidth: 2,
    borderColor: 'black',
    paddingLeft: 10,
    justifyContent: 'center',
  },
  arrow: {
    borderTopWidth: 10,
    borderLeftWidth: 0,
    borderBottomWidth: 10,
    borderRightWidth: 10,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: '#6AC52D',
    position: 'absolute',
    left: -8,
  },
});

export default ArrowBorderLeft;

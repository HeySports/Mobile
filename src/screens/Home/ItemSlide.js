import React from 'react';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
const Item = (props) => {
  return (
    <View style={styles.container}>
      <Image source={props.inform.image} style={styles.imageSlide} />
    </View>
  );
};
export default Item;
const { height, width } = Dimensions.get('window');
const startWidth = 360;
const startHeight = 640;
const styles = StyleSheet.create({
  container: {
    marginLeft: (20 / startWidth) * width,
    marginRight: (20 / startWidth) * width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1d9dd8',
  },
  imageSlide: {
    height: 170,
    width: '100%',
  },
});

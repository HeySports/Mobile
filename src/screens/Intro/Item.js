import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
const Item = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageIntro} source={props.inform.image} />
      <Text style={styles.title}>{props.inform.title}</Text>
      <Text style={styles.description}>{props.inform.description}</Text>
    </View>
  );
};
export default Item;
const { height, width } = Dimensions.get('window');
const startWidth = 360;
const startHeight = 640;
const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    alignItems: 'center',
    marginTop: (110 / startHeight) * height,
  },
  imageIntro: {
    width: (200 / startWidth) * width,
    height: (200 / startWidth) * width,
    borderRadius: ((200 / startWidth) * width) / 2,
  },
  title: {
    fontSize: (18 / startWidth) * width,
    marginTop: (10 / startHeight) * height,
    fontWeight: 'bold',
  },
  description: {
    fontSize: (14 / startWidth) * width,
    marginTop: (5 / startHeight) * height,
    marginLeft: (20 / startWidth) * width,
    marginRight: (20 / startWidth) * width,
    lineHeight: 18,
    textAlign: 'center',
  },
});

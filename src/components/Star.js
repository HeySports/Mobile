import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/FontAwesome';
import colors from '../themes/colors';

const Star = ({ star, size }) => {
  var starView = [];
  let starSize = star;
  for (let i = 0; i < 5; i++) {
    if (starSize >= 1) {
      starView.push(<Icons key={i} name="star" size={size ? size : 11} color={colors.primary} />);
      starSize = starSize - 1;
    } else if (starSize < 1 && starSize > 0) {
      starView.push(
        <Icon key={i} name="star-half-alt" size={size ? size - 1 : 10} color={colors.primary} />,
      );
      starSize = 0;
    } else {
      starView.push(
        <Icon key={i} name="star" size={size ? size - 1 : 10} color={colors.primary} />,
      );
    }
  }
  return <View style={styles.layoutStar}>{starView}</View>;
};

const styles = StyleSheet.create({
  layoutStar: {
    flexDirection: 'row',
  },
});

export default Star;

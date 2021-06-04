import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Images from '../../image/index';
import { Colors, Fonts } from '../../themes';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Star from '../../components/Star';
const Comment = ({
  comment,
  styleContainer,
  styleLeft,
  styleRight,
  styleImage,
  styleBottom,
  styleDescription,
  onPressEdit,
  onPressDelete,
}) => {
  const ItemBottom = ({ icon, onPress, colors }) => {
    return (
      <TouchableOpacity style={styles.btnBottom} onPress={onPress}>
        <Icons name={icon} style={[styles.iconComment, { color: colors }]} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={[styles.container, styleContainer && styleContainer]}>
      <View style={[styles.leftComment, styleLeft && styleLeft]}>
        <Image source={Images.avatar} style={[styles.image, styleImage]} />
      </View>
      <View style={[styles.rightComment, styleRight && styleRight]}>
        <View style={styles.user}>
          <Text style={styles.txtNameUser}>{comment?.full_name}</Text>
        </View>
        <View style={[styles.description, styleDescription && styleDescription]}>
          <Text style={styles.textComment}>{comment.description}</Text>
        </View>
        <View style={[styles.bottomComment, styleBottom]}>
          <View style={styles.rating}>
            <Star star={Math.floor(Math.random() * 5) + 1} />
          </View>
          <ItemBottom icon="edit" onPress={onPressEdit} colors={Colors.primary} />
          <ItemBottom icon="trash-alt" onPress={onPressDelete} colors={Colors.error} />
        </View>
      </View>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 15,
    padding: 5,
    borderRadius: 4,
    backgroundColor: Colors.shadow,
    shadowColor: 'rgba(0, 0, 0, 0.06);',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  leftComment: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  rightComment: {
    flex: 4,
  },
  user: {
    height: 30,
    justifyContent: 'center',
  },
  txtNameUser: {
    fontSize: Fonts.title_child4,
    fontWeight: '700',
  },
  bottomComment: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnBottom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    borderRadius: 4,
  },
  rating: {
    flex: 1,
  },
  iconComment: {
    fontSize: 16,
  },
});

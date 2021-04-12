import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import Color from '../themes/colors';
import Font from '../themes/font';
import profile from '../image/profile.jpg';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';
const Comment = (props) => {
  const comments = props.comment;
  return (
    <View style={styles.container}>
      <View style={styles.imageUser}>
        <View style={styles.borderImage}>
          <Image source={profile} style={styles.image} />
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.topContent}>
          <View style={styles.title}>
            <Text style={styles.txtTitle}>{comments?.full_name}</Text>
          </View>
          <View style={styles.time}>
            <Text style={styles.txtTime}>
              {comments?.created_at ? String(comments?.created_at).substr(11, 5) : '10:30'}
            </Text>
          </View>
        </View>
        <View style={styles.bodyContent}>
          <View style={styles.contents}>
            <Text style={styles.txtContent}>{comments?.description}</Text>
          </View>

          {props.checkUser ? (
            <View style={styles.iconComment}>
              <TouchableOpacity style={styles.btnIconComment}>
                <Icon name="edit" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnIconComment}>
                <Icon name="trash-alt" style={styles.icon} />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.iconComment} />
          )}
        </View>
        <View style={styles.bottomContent}>
          <Text style={styles.txtTime}>
            {comments?.created_at
              ? String(comments.created_at).substr(0, 10).split('')
              : '2021-04-20'}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default Comment;
const { width } = Dimensions.get('window');
const startWidth = 360;
const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: '#E5E5E5',
    width: width - (10 / startWidth) * width * 2,
    flexDirection: 'row',
    margin: (10 / startWidth) * width,
    borderRadius: 10,
  },
  imageUser: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderImage: {
    height: 40,
    width: 40,
    borderWidth: 2,
    borderColor: Color.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  content: { flex: 8 },
  topContent: {
    height: 25,
    marginTop: 5,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 8,
    justifyContent: 'center',
  },
  txtTitle: {
    fontSize: Font.title_child4,
    fontWeight: 'bold',
  },
  time: { flex: 2, justifyContent: 'center' },
  txtTime: {
    fontSize: Font.font_description,
    color: Color.txtLevel3,
  },
  bodyContent: {
    height: 50,
    marginRight: 5,
    flexDirection: 'row',
  },
  contents: {
    flex: 8,
    height: '100%',
  },
  txtContent: {
    fontSize: Font.font_description,
  },
  iconComment: {
    flex: 2,
    height: '100%',
  },
  btnIconComment: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 16,
    color: Color.error,
  },
  bottomContent: {
    height: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 10,
  },
});

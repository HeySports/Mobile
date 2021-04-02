import React, { useEffect } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Color from '../../themes/colors';
import Font from '../../themes/font';
import pitch from '../../image/duytan.jpg';
import { goBack } from '../../navigation/pushScreen';
import { useDispatch, useSelector } from 'react-redux';
import FieldAction from '../../redux/FieldRedux/actions';
import Loading from '../../components/Loading';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Star from '../../components/Star';
import Comment from '../../components/Comment';
const Detail = (props) => {
  const goBackScreen = () => {
    goBack(props.componentId);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    const id = props.data;
    dispatch(FieldAction.getDetailField(id));
    dispatch(FieldAction.userGetCommentField(id));
  }, [dispatch, props.data]);
  var field = [];
  var comments = [];
  const detail = useSelector((state) => state.fields);
  if (detail.responseDetailField) {
    field = detail.responseDetailField;
  }
  if (detail.responseComment) {
    comments = detail.responseComment;
  }
  const listItem = [
    {
      icon: 'map-marker-alt',
      content: field.address,
    },
    {
      icon: 'phone-alt',
      content: field.phone_numbers,
    },
    {
      icon: 'envelope',
      content: field.email_field,
    },
    {
      icon: 'clock',
      content: '6:00 am - 22:00 pm',
    },
    {
      icon: 'money-bill-alt',
      content: '310 000 VND/1h',
    },
  ];
  return (
    <>
      {detail.loadingDetailField ? (
        <Loading />
      ) : (
        <View style={styles.container}>
          <ScrollView style={{ height: '100%' }}>
            <View style={styles.header}>
              <Image source={pitch} style={styles.imageField} />
              <TouchableOpacity style={styles.btnBack} onPress={goBackScreen}>
                <Text style={styles.txtBtnBack}>X</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.body}>
              <View style={styles.menuTab}>
                <TouchableOpacity style={styles.itemMenuTab}>
                  <Icon name="calendar-alt" style={styles.iconItemMenu} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemMenuTab}>
                  <Icon name="paper-plane" style={styles.iconItemMenu} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemMenuTab}>
                  <Icon name="comment-dots" style={styles.iconItemMenu} />
                </TouchableOpacity>
              </View>
              <View style={styles.contentField}>
                <View style={styles.nameField}>
                  <Text style={styles.txtNameField}>{field && field.name}</Text>
                </View>
                {listItem.map((item, index) => {
                  return (
                    <View style={styles.bodyContent} key={index}>
                      <View style={styles.itemContentIcon}>
                        <Icon name={item.icon} style={styles.iconItemContent} />
                      </View>
                      <View style={styles.itemContentTxt}>
                        <Text style={styles.txtContent}>{item.content}</Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
            <View style={styles.bottom}>
              <View style={styles.description}>
                <Text style={styles.titleDescription}>Mô Tả</Text>
                <Text style={styles.txtDescription}>
                  Sân bóng Duy Tân nằm ở phía trong Quân khu 5. Nằm sát sân bóng Chuyên Việt.
                </Text>
              </View>
              <View style={styles.comment}>
                <View style={styles.rating}>
                  <Text style={styles.titleDescriptions}>Đánh Giá</Text>
                  <Star star={field.rating} />
                </View>
                <View style={styles.listComment}>
                  {comments.map((item, index) => {
                    return (
                      <Comment
                        key={index}
                        user_name={item.user_name}
                        description={item.description}
                        time="10:20"
                        date="01-04-2020"
                      />
                    );
                  })}
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default Detail;
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    flexDirection: 'column',
    flex: 1,
  },
  header: {
    flex: 1,
  },
  imageField: {
    width: width,
    height: 180,
  },
  btnBack: {
    height: 40,
    top: -180,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtnBack: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    flex: 1.5,
    marginTop: -39.5,
  },
  menuTab: {
    width: width,
    height: 35,
    borderWidth: 0.5,
    borderColor: Color.txtLevel2,
    flexDirection: 'row',
  },
  itemMenuTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: Color.txtLevel2,
  },
  iconItemMenu: {
    color: Color.txtLevel3,
    fontSize: Font.title_child4,
  },
  contentField: {
    width: width,
  },
  nameField: {
    width: width,
    height: 40,
    justifyContent: 'center',
  },
  txtNameField: {
    fontSize: Font.title_child2,
    marginLeft: 15,
    color: Color.primary,
    fontWeight: 'bold',
  },
  bodyContent: {
    height: 35,
    width: width,
    flexDirection: 'row',
  },
  itemContentIcon: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconItemContent: {
    fontSize: 20,
    color: Color.primary,
  },
  itemContentTxt: {
    flex: 8.5,
    justifyContent: 'center',
    width: '100%',
  },
  txtContent: {
    fontSize: Font.font_description,
    width: '100%',
  },
  bottom: {
    flex: 1.5,
    width: width,
  },
  description: {
    width: width,
  },
  titleDescription: {
    marginLeft: 15,
    fontSize: Font.title_child2,
    color: Color.primary,
    fontWeight: 'bold',
  },
  txtDescription: {
    marginLeft: 20,
    marginRight: 5,
    lineHeight: 20,
  },
  comment: {
    width: width,
    marginTop: 15,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleDescriptions: {
    marginLeft: 15,
    fontSize: Font.title_child2,
    color: Color.primary,
    fontWeight: 'bold',
    width: 90,
  },
  listComment: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

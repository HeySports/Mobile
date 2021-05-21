import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
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
import ModelComment from '../../components/ModelComment';
import CommentActions from '../../redux/CommentRedux/actions';
const Detail = (props) => {
  const [checkShowModel, setCheckShowModel] = useState(false);
  const [id] = useState(props.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FieldAction.getDetailField(id));
    dispatch(CommentActions.userGetCommentField(id));
  }, [dispatch, id]);
  var field = [];
  var comments = useSelector((state) => state.comment);
  const detail = useSelector((state) => state.fields);
  var users = useSelector((state) => state.profile.responseProfile.id);
  if (detail.responseDetailField) {
    field = detail.responseDetailField;
  }
  const listItem = [
    {
      icon: 'map-marker-alt',
      content: field?.address,
    },
    {
      icon: 'phone-alt',
      content: field?.phone_numbers,
    },
    {
      icon: 'envelope',
      content: field?.email_field,
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
  const goBackScreen = () => {
    goBack(props.componentId);
  };
  const setModel = () => {
    setCheckShowModel(false);
  };
  const setModelTrue = () => {
    setCheckShowModel(true);
  };
  const elementDetailField = (icon, functionOnpress) => {
    return (
      <TouchableOpacity
        style={checkShowModel ? styles.choseBtn : styles.itemMenuTab}
        onPress={() => functionOnpress()}
      >
        <Icon name={icon} style={checkShowModel ? styles.iconItemMenus : styles.iconItemMenu} />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {checkShowModel ? (
        <ModelComment
          showModel={setModel}
          title={field && field.name}
          id={field && field.id}
          description="Nhận xét về sân bóng !"
        />
      ) : (
        <View />
      )}
      {detail.loadingDetailField ? (
        <Loading loadingStyle={styles.loading} />
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
                {elementDetailField('calendar-alt', setModelTrue)}
                {elementDetailField('paper-plane', setModelTrue)}
                {elementDetailField('comment-dots', setModelTrue)}
              </View>
              <View style={styles.contentField}>
                <View style={styles.nameField}>
                  <Text style={styles.txtNameField}>{field && field.name}</Text>
                </View>
                {listItem?.map((item, index) => {
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
                  <Star star={field?.rating} />
                </View>
                <View style={styles.listComment}>
                  {comments?.responseGetComment?.slice(0, 10).map((item, index) => {
                    if (users === item.id_user) {
                      return <Comment key={index} checkUser={true} comment={item} id_field={id} />;
                    } else {
                      return <Comment key={index} comment={item} />;
                    }
                  })}
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};
export default Detail;
const { width } = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
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
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: Color.txtLevel2,
  },
  choseBtn: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Color.primary,
  },
  iconItemMenu: {
    color: Color.txtLevel3,
    fontSize: Font.title_child4,
  },
  iconItemMenus: {
    color: Color.primary,
    fontSize: Font.title_child,
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
  loading: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

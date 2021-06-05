import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { Colors } from '../../../themes';
import Images from '../../../image';
import { useSelector, useDispatch } from 'react-redux';
import TeamActions from '../../../redux/TeamRedux/actions';
import ModelNotification from '../../../components/JoinTeam/ModelJoinTeam';
import Loading from '../../../components/Load';
const Team = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(Images.vn);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [model, setModel] = useState(false);
  const team = useSelector((state) => state.team);
  const onCreateTeam = async () => {
    await dispatch(TeamActions.createTeam({ name, address, description }));
    setTimeout(function () {
      setModel(true);
    }, 2000);
  };
  const handleModel = () => {
    setModel(false);
  };
  const handleModelSuccess = () => {
    setModel(false);
    Navigation.popTo('Profile');
  };
  return (
    <SafeAreaView style={styles.container}>
      {model && (
        <ModelNotification
          labelBtn1={team?.error ? 'Xác Nhận' : 'Xác Nhận'}
          title={team?.error ? 'THẤT BẠI' : 'THÀNH CÔNG'}
          checkModel={true}
          checkBtn={false}
          description={team?.error ? team?.error?.data?.message : 'Bạn đã đội thành công'}
          handleModel={team?.error ? handleModel : handleModelSuccess}
          styleBodyModel={styles.styleModelNotification}
          styleDescriptionView={styles.descriptionNotification}
        />
      )}
      <View style={styles.headerDetailTeam}>
        <View style={styles.iconHeader}>
          <TouchableOpacity
            style={styles.btnBackHeader}
            onPress={() => Navigation.popTo('Profile')}
          >
            <Icons name="caret-left" style={styles.iconBack} size={15} />
          </TouchableOpacity>
        </View>
        <View style={styles.titleHeader}>
          <Text style={styles.txtTitle}>CHI TIẾT ĐỘI BÓNG</Text>
        </View>
      </View>
      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <View style={styles.imageTeam}>
          <Image source={image} style={styles.image} />
        </View>
        <View style={styles.bodyTeam}>
          <TextInput
            style={styles.textInput}
            placeholder="Tên đội"
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Địa Chỉ"
            onChangeText={(text) => setAddress(text)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Trình độ( Mới Chơi, Trung Bình,Đội Mạnh)"
            onChangeText={(text) => setRating(text)}
          />
          <TextInput
            style={[styles.textInput, styles.txtDescription]}
            placeholder="Mô Tả Đội"
            numberOfLines={6}
            onChangeText={(text) => setDescription(text)}
          />
          <TouchableOpacity style={styles.btnCreateTeam} onPress={onCreateTeam}>
            <Text style={styles.txtBtnCreateTeam}>TẠO ĐỘI</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {team?.loading && <Loading />}
    </SafeAreaView>
  );
};

export default Team;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerDetailTeam: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.txtLevel3,
  },
  iconHeader: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleHeader: {
    height: '100%',
    width: '75%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnBackHeader: {
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBack: {
    fontSize: 20,
    color: Colors.greyishBrown,
  },
  txtTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  bodyTeam: {
    flex: 1,
    padding: 24,
    paddingTop: 20,
  },
  imageTeam: {
    flex: 1,
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  body: {
    flex: 1,
  },
  textInput: {
    height: 40,
    width: '100%',
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: Colors.txtLevel2,
    marginTop: 15,
  },
  txtDescription: {
    height: 100,
    textAlignVertical: 'top',
  },
  btnCreateTeam: {
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: Colors.primary,
    height: 40,
    borderRadius: 4,
  },
  txtBtnCreateTeam: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.shadow,
  },
  styleModelNotification: {
    height: 180,
  },
  descriptionNotification: {
    height: 80,
  },
});

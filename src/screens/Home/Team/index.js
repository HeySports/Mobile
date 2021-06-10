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
import axios from 'axios';
import { Navigation } from 'react-native-navigation';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { Colors } from '../../../themes';
import Images from '../../../image';
import { useSelector, useDispatch } from 'react-redux';
import TeamActions from '../../../redux/TeamRedux/actions';
import ModelNotification from '../../../components/JoinTeam/ModelJoinTeam';
import Loading from '../../../components/Load';
import Model from '../../../components/JoinTeam/ModelJoinTeam';
import LoadingImage from '../../../components/Load';

import DocumentPicker from 'react-native-document-picker';

const Team = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.responseProfile);

  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [model, setModel] = useState(false);
  const team = useSelector((state) => state.team);
  const [error, setError] = useState('');
  const [modelError, setModelError] = useState(false);
  const [loading, setLoading] = useState(false);
  const uploadImage = async () => {
    const TOKEN =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiM2E5YzE5NmI2YjJjNGIyNmRiZGZkODE1MTNkOGVjZDIxN2E3MTUzMWE0N2QxM2M1OTQ3OWFiNWFiMzE5NzQ1OGE0NzhjOTc1NTVlNThiOWUiLCJpYXQiOjE2MTU5ODAwMTIsIm5iZiI6MTYxNTk4MDAxMiwiZXhwIjoxNjQ3NTE2MDExLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.hej0cb0MhGQwFKl66Bq0iK0M-o2yOeCWNOrp9lXj8jb2I4pdUwXsTgOJSL99Bq7XQJvYBqhVkbdfqQYSgj-Q3h3l5nvuOujdZIoR6-5Ma_VXjT9OncXo_XHDxasFTFjEmTlxUSnquMO6hcWJmqiatd8M15bcaY257KjDBdcHfTXnWCzxMyNceC4jTr_uVhGjlHwRB-Z7V7S0P4fVGF-oV5c6kbcdoAq8ktqT0FgpJNf4k4_PBP46lpteVDKhHzT5XDcXMbxSt1upEw9J_ThV0L5Ooy0w5Xu7vnfkkLFSZ0AdeT5yYuFb6XFevmmRpgIEjzt-oK8OjpsYgNWAp0D1qAnXjnnXF1gKJxkQqE0vxPrQlK18B4oJiX04XxMvmxypZakMnJMV1fEeX7XsNlth2JUvjRkMUi0Wc-e6fbuuMguKYjfNmTJqMvMDwF1yzJ1I2-Fcrg23Ixt1Cf-y19wSOfrGKSj_lV3YR5kfWQRwJIY4UwdhQyxlWPo8b0K1B_lwP8zg3qR5e7G8eNEr1IXxxk8DMXQ6CRRfESjCknvIDoDpGV-Dh2F2njEt7KAsXAeonBznbesbwkyyckCxhv1te2gC8wzqZn4fPtg8cgHgHSbS_iSsF7RvOAdeKTzm9kjOyGt_nS44RkQQ7zcRw-7fLKgt_TIr45Cstq6P2i3WkRY';
    try {
      const response = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      if (response) {
        setImage(response.uri);
      }
      setLoading(true);
      const dataForm = new FormData();
      dataForm.append('folder', 'avatars');
      dataForm.append('image', {
        uri: response.uri,
        type: response.type,
        name: response.name,
      });
      axios({
        method: 'POST',
        url: 'http://dtravel.crayi.com/api/v1/image-upload',
        data: dataForm,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: 'Bearer ' + TOKEN,
        },
      })
        .then(function (responses) {
          console.log(responses);
          if (responses.status === 200) {
            setLoading(false);
            setImage(responses?.data?.data);
          }
        })
        .catch(function (error) {
          console.log(error);
          console.log(error.response.data);
          setLoading(false);
        });
    } catch (err) {}
  };
  const userExists = (id) => {
    return team?.listTeam?.some(function (el) {
      return el.create_by === id;
    });
  };
  const nameExists = (nameTeam) => {
    return team?.listTeam?.some(function (el) {
      return el.name === nameTeam;
    });
  };
  const onCreateTeam = async () => {
    if (userExists(user.id)) {
      setModelError(true);
      setError('Bạn đã tạo một team trước đó, Bạn không thể tạo thêm đội nào nữa');
    } else if (nameExists(name)) {
      setModelError(true);
      setError('Tên đội này đã tồn tại, bạn phải chọn tên khác');
    } else if (!name) {
      setModelError(true);
      setError('Bạn Chưa nhập tên đội');
    } else if (!address) {
      setModelError(true);
      setError('Bạn chưa nhập Địa chỉ');
    } else {
      await dispatch(TeamActions.createTeam({ name, address, description, image }));
      setError('');
      setModelError(false);
      setTimeout(function () {
        setModel(true);
      }, 2000);
    }
  };
  const handleModel = () => {
    setModel(false);
    setModelError(false);
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
      {modelError && (
        <ModelNotification
          labelBtn1={'Xác Nhận'}
          title={'THẤT BẠI'}
          checkModel={true}
          checkBtn={false}
          description={error}
          handleModel={handleModel}
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
          <Image source={image ? { uri: image } : Images.vn} style={styles.image} />
          <TouchableOpacity style={styles.btnUpload} onPress={uploadImage}>
            <Icons name="camera" style={styles.iconUpload} />
          </TouchableOpacity>
          {loading && <LoadingImage />}
        </View>

        <View style={styles.bodyTeam}>
          <TextInput
            style={styles.textInput}
            placeholder="Tên đội *"
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Địa Chỉ *"
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
            multiline={true}
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
  btnUpload: {
    position: 'absolute',
    bottom: 10,
    left: 15,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconUpload: {
    fontSize: 20,
    color: Colors.primary,
  },
});

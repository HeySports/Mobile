import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { pushScreen } from '../../navigation/pushScreen';
const Room = (props) => {
  const pushScreenToScreen = (screen, data) => {
    pushScreen(props.componentId, screen, data, screen, false, '', '');
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.btnFindMembers}
        onPress={() => pushScreenToScreen('FindMember')}
      >
        <Text>Tìm cầu chơi</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Room;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
const Histories = (props) => {
  return (
    <View style={styles.itemHistories}>
      <View style={styles.historiesItem}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.btnHistories}
          onPress={() => setTxtSearch(item.description)}
        >
          <View style={styles.viewIconHistories}>
            <Icon name="history" style={styles.historiesIcon} />
          </View>
          <View style={styles.description}>
            <Text style={styles.txtDescription}>{item.description}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.viewIconDelete}>
          <TouchableOpacity style={styles.btnDeleteHistories} activeOpacity={0.6}>
            <Icon name="times" style={styles.historiesIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Histories;

const styles = StyleSheet.create({});

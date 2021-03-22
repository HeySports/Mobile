/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import AsyncStorage from '@react-native-community/async-storage';

const Field = () => {
  const [currentLatitude, setCurrentLatitude] = useState('...');
  const [currentLongitude, setCurrentLongitude] = useState('...');
  useEffect(() => {
    getStore();
  }, []);
  const getStore = async () => {
    try {
      const location = await AsyncStorage.getItem('location');
      const jsonLocation = JSON.parse(location);
      setCurrentLatitude(jsonLocation.currentLat);
      setCurrentLongitude(jsonLocation.currentLong);
    } catch (e) {
      alert('Failed to fetch the data from storage');
    }
  };
  return (
    <View style={styles.mapContainer}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: Number(currentLatitude),
          longitude: Number(currentLongitude),
          latitudeDelta: 0.00932,
          longitudeDelta: 0.2521,
        }}
        showUserLocation={true}
      >
        <Marker
          coordinate={{
            latitude: Number(currentLatitude),
            longitude: Number(currentLongitude),
          }}
        />
      </MapView>
    </View>
  );
};
export default Field;
const { height, width } = Dimensions.get('window');
const startWidth = 360;
const startHeight = 640;
const styles = StyleSheet.create({
  mapContainer: {
    height: height,
    width: width,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  searchView: {
    marginTop: -200,
  },
});

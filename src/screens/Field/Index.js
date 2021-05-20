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
      if (location) {
        const jsonLocation = JSON.parse(location);
        setCurrentLatitude(jsonLocation.currentLat);
        setCurrentLongitude(jsonLocation.currentLong);
      } else {
        setCurrentLatitude(16.0717635);
        setCurrentLongitude(107.9380399);
      }
    } catch (e) {
      console.log('====================================');
      console.log(e);
      console.log('====================================');
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

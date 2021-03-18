import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, View, PermissionsAndroid, Platform } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
const Field = () => {
  const [currentLong, setCurrentLong] = useState(null);
  const [currentLat, setCurrentLat] = useState(null);
  const [locationStatus, setLocationStatus] = useState('');
  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Truy cập vị tí của bạn',
            message: 'App này cần bạn cho phép truy cập vị trí của bạn ',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getLocation();
        } else {
          setLocationStatus('Permission Denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };
    requestLocationPermission();
  });
  const getLocation = () => {
    Geolocation.getCurrentPosition((index) => console.log(index));
  };
  return (
    <View style={styles.mapContainer}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 16.045444,
          longitude: 108.1827412,
          latitudeDelta: 0.00932,
          longitudeDelta: 0.2521,
        }}
        showUserLocation={true}
      >
        <Marker
          coordinate={{
            latitude: 16.045444,
            longitude: 108.1827412,
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
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

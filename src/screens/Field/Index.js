import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, View, PermissionsAndroid, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
const Field = () => {
  const [currentLongitude, setCurrentLongitude] = useState(0);
  const [currentLatitude, setCurrentLatitude] = useState(0);
  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Access Required',
            message: 'This App needs to Access your location',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          Geolocation.getCurrentPosition(
            (position) => {
              const currentLong = position.coords.longitude;
              const currentLat = position.coords.latitude;
              setCurrentLongitude(currentLong);
              setCurrentLatitude(currentLat);
            },
            (error) => {
              console.log(error);
            },
          );
        } else {
          console.log('fails');
        }
      } catch (err) {
        console.warn(err);
      }
    };
    requestLocationPermission();
  }, []);
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
      <View style={styles.searchView}>
        <Text>doan tien thanh</Text>
      </View>
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

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, SafeAreaView, FlatList } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import AsyncStorage from '@react-native-community/async-storage';
import { useSelector } from 'react-redux';
import Images from '../../image';
import Pitch from '../../components/Pitch';
const Field = () => {
  const [currentLatitude, setCurrentLatitude] = useState('...');
  const [currentLongitude, setCurrentLongitude] = useState('...');
  useEffect(() => {
    getStore();
  }, []);
  const fieldList = useSelector((state) => state.fields?.responseField);
  const getStore = async () => {
    try {
      const location = await AsyncStorage.getItem('location');
      if (location) {
        const jsonLocation = JSON.parse(location);
        setCurrentLatitude(jsonLocation.currentLat);
        setCurrentLongitude(jsonLocation.currentLong);
      } else {
        setCurrentLatitude('16.0594997');
        setCurrentLongitude('108.2393834');
      }
    } catch (e) {}
  };
  return (
    <SafeAreaView style={styles.mapContainer}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: Number(currentLatitude),
          longitude: Number(currentLongitude),
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        showUserLocation={true}
      >
        {fieldList &&
          fieldList?.map((item, index) => {
            return (
              <Marker
                key={index}
                coordinate={{
                  latitude: parseFloat(item?.latitude),
                  longitude: parseFloat(item?.longitude),
                }}
                style={styles.marker}
                title={item?.name}
              >
                <View style={styles.image}>
                  <Image source={Images.icon} style={styles.imageField} resizeMode="contain" />
                </View>
              </Marker>
            );
          })}

        <Marker
          coordinate={{
            latitude: parseFloat(currentLatitude),
            longitude: parseFloat(currentLongitude),
          }}
          title={'Vị Trí Của Bạn'}
        />
      </MapView>
      <View style={styles.fieldList}>
        <FlatList
          horizontal
          data={fieldList}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <Pitch
              key={index}
              item={item}
              checkField={true}
              styleContainer={styles.styleContainer}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
export default Field;
const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  image: {
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    borderRadius: 4,
  },
  imageField: {
    height: '100%',
    width: '100%',
    borderRadius: 4,
  },
  marker: {
    width: 30,
    height: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  fieldList: {
    position: 'absolute',
    bottom: 2,
  },
  styleContainer: {
    height: 170,
  },
});

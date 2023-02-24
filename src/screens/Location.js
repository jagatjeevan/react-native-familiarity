import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { throttle } from 'lodash.throttle';

const LocationScreen = () => {
  const [location, setLocation] = useState(null);
  const [coords, setCoords] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestBackgroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setCoords(location.coords);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View>
      <View style={styles.spacer}>
        <Text>My location : {text}</Text>
      </View>
      <Text>My Coordinates : {JSON.stringify(coords)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  spacer: {
    marginVertical: 10,
  },
});

export default LocationScreen;

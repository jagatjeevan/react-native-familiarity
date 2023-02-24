import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import BasicComponents from './screens/BasicComponents';
import Lists from './screens/Lists';
import Icons from './components/Icons';
import { StyleSheet } from 'react-native';
import LocationScreen from './screens/Location';

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export function App() {
  const handleIconPress = () => {
    alert('icon is pressed');
  };

  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen
            name="Home"
            component={BasicComponents}
            options={{
              headerTitle: 'Basic Components',
              headerRight: () => (
                <Icons
                  name="basket"
                  size="20"
                  color="#3e3e3e"
                  containerStyles={styles.drawerIcon}
                  onPressed={handleIconPress}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Lists"
            component={Lists}
            initialParams={{ id: 2, otherParam: Math.floor(Math.random() * 100) }}
            options={{ title: 'Lists' }}
          />
          <Drawer.Screen
            name="Location"
            component={LocationScreen}
            options={{ title: 'My Location' }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
      <StatusBar style="dark" />
    </>
  );
}

const styles = StyleSheet.create({
  drawerIcon: {
    marginLeft: 10,
    marginRight: 10,
  },
});

export default registerRootComponent(App);

import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BasicComponents from './screens/BasicComponents';
import Lists from './screens/Lists';
import Icons from './components/Icons';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

export function App() {
  const handleIconPress = () => {
    alert('icon is pressed');
  };

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={BasicComponents}
            options={{
              headerTitle: 'Basic Components',
              headerRight: () => (
                <Icons
                  name="menu"
                  size="20"
                  color="#3e3e3e"
                  containerStyles={styles.drawerIcon}
                  onPressed={handleIconPress}
                />
              ),
            }}
          />
          <Stack.Screen name="Lists" component={Lists} options={{ title: 'Lists' }} />
        </Stack.Navigator>
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

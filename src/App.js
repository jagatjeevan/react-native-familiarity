import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BasicComponents from './screens/BasicComponents';
import Lists from './screens/Lists';

const Stack = createNativeStackNavigator();

export function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={BasicComponents} />
          <Stack.Screen name="Lists" component={Lists} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="dark" />
    </>
  );
}

export default registerRootComponent(App);

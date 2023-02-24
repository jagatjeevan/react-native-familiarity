import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ButtonScreen from './basicComponents/ButtonScreen';
import TextScreen from './basicComponents/TextScreen';
import TextAreaScreen from './basicComponents/TextaareaScreen';
import ImageScreen from './basicComponents/Image';

const Tab = createBottomTabNavigator();
const RootBasicComponent = () => {
  const getTabIcon = ({ route, focused, color, size }) => {
    const iconColor = focused ? 'tomato' : color;
    switch (route.name) {
      case 'FormInput':
        return <Ionicons name="ios-information-circle" size={size} color={iconColor} />;
      case 'TextArea':
        return <Ionicons name="document-text" size={size} color={iconColor} />;
      case 'Image':
        return <Ionicons name="image" size={size} color={iconColor} />;
      case 'Button':
      default:
        return <Ionicons name="aperture" size={size} color={iconColor} />;
    }
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused, color, size }) => getTabIcon({ route, focused, color, size }),
        };
      }}
    >
      <Tab.Screen name="Button" component={ButtonScreen} />
      <Tab.Screen name="FormInput" component={TextScreen} />
      <Tab.Screen name="Textarea" component={TextAreaScreen} />
      <Tab.Screen name="Image" component={ImageScreen} />
    </Tab.Navigator>
  );
};

export default RootBasicComponent;

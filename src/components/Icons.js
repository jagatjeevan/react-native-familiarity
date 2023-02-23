import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, View } from 'react-native';

const Icons = (props) => {
  const { name, size, color, containerStyles, onPressed, fontSize = 30 } = props;
  return (
    <Pressable style={containerStyles} onPress={onPressed}>
      <Ionicons name={name} size={size} color={color} style={{ fontSize: fontSize }} />
    </Pressable>
  );
};

export default Icons;

import { Button } from 'react-native';
import { View } from 'react-native';
import Icons from '../../components/Icons';
import styles from './styles';

const ButtonScreen = (props) => {
  const { navigation } = props;
  const buttonPressHandler = () => {
    alert('button is pressed');
    navigation.navigate('Lists', { id: 2, otherParam: Math.floor(Math.random() * 100) });
  };

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title="A button component" onPress={buttonPressHandler} />
        <Icons name="aperture" size={24} color={'blue'} />
      </View>
    </View>
  );
};

export default ButtonScreen;

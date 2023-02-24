import { View, ImageBackground, Image, Text } from 'react-native';
import styles from './styles';

const ImageScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/abstract.jpeg')}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.container}>
          <Image
            accessibilityLabel="racoon"
            source={require('../../../assets/racoon.jpeg')}
            style={styles.imageStyles}
          />
          <Text>This is a basic Text component</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ImageScreen;

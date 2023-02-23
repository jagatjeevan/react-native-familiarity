import { useState } from 'react';
import {
  Button,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import globalStyles from '../styles/global';

const BasicComponents = (props) => {
  const { navigation } = props;
  const [textValue, setTextValue] = useState('');
  const [numValue, setNumValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  const buttonPressHandler = () => {
    alert('button is pressed');
    navigation.navigate('Lists');
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView>
        <ImageBackground
          source={require('../../assets/abstract.jpeg')}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.container}>
            <Text>You entered : {textareaValue}</Text>
            <Text>This is a basic Text component</Text>
            <View style={styles.button}>
              <Button title="A button component" onPress={buttonPressHandler} />
            </View>
            <Image
              accessibilityLabel="racoon"
              source={require('../../assets/racoon.jpeg')}
              style={styles.imageStyles}
            />
            <TextInput
              onChangeText={setTextValue}
              value={textValue}
              style={styles.textStyle}
              placeholder="Useless placeholder"
            />
            <TextInput
              onChangeText={setNumValue}
              value={numValue}
              style={styles.textStyle}
              placeholder="Useless placeholder"
              keyboardType="number-pad"
            />
            <View style={globalStyles.textAreaStyle}>
              <TextInput
                value={textareaValue}
                onChangeText={setTextareaValue}
                multiline={true}
                placeholder="Write multi lines"
              />
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: globalStyles.screenCenter,
  textStyle: globalStyles.input,
  button: {
    marginVertical: 10,
  },
  imageStyles: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
  },
});

export default BasicComponents;

import { useState } from 'react';
import { TextInput, View } from 'react-native';
import styles from './styles';

const TextScreen = () => {
  const [textValue, setTextValue] = useState('');
  const [numValue, setNumValue] = useState('');
  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default TextScreen;

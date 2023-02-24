import { KeyboardAvoidingView, ScrollView, View, TextInput, Platform, Text } from 'react-native';
import { useState } from 'react';
import styles from './styles';
import globalStyles from '../../styles/global';

const TextAreaScreen = () => {
  const [textareaValue, setTextareaValue] = useState('');
  return (
    <ScrollView contentContainerStyle={[styles.container, { width: '100%' }]}>
      <KeyboardAvoidingView
        style={{ flex: 1, alignItems: 'center', width: '100%' }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <View style={globalStyles.textAreaStyle}>
          <TextInput
            value={textareaValue}
            onChangeText={setTextareaValue}
            multiline={true}
            placeholder="Write multi lines"
            style={{ width: '100%', height: 40 }}
          />
        </View>
        <Text>You entered : {textareaValue}</Text>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default TextAreaScreen;

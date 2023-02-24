import { StyleSheet } from 'react-native';
import globalStyles from '../../styles/global';

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

export default styles;

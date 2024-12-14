import Colors from 'App/Themes/Colors/Colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerText: {
    marginStart: 72,
    fontSize: 24,
    color: Colors.white,
    marginBottom: 22,
  },
  backImage: {width: 48, height: 48},
  backButton: {
    width: 48,
    position: 'absolute',
    top: 26,
  },
  container: {
    justifyContent: 'flex-end',
    height: 150,
    backgroundColor: Colors.blue,
  },
});

export default styles;

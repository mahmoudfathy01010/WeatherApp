import Colors from 'App/Themes/Colors/Colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: Colors.blue,
  },
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  headerText: {
    marginStart: 72,
    fontSize: 24,
    marginTop: 35,
    color: Colors.white,
  },
  backImage: {width: 48, height: 48},
  backButton: {
    marginTop: 20,
    width: 48,
  },
  listContainer: {marginTop: 10},
});

export default styles;

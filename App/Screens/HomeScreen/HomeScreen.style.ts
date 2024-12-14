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
    marginTop: 99,
    fontSize: 24,
    color: Colors.white,
  },
  listContainer: {marginTop: 10},
});

export default styles;

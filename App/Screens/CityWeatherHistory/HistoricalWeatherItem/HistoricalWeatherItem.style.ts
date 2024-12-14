import Colors from 'App/Themes/Colors/Colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  date: {
    fontSize: 14,
    color: Colors.grey,
    marginBottom: 4,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;

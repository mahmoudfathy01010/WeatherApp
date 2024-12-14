import Colors from 'App/Themes/Colors/Colors';
import Fonts from 'App/Themes/Fonts/Fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 56,
    backgroundColor: Colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  textContainer: {flexDirection: 'row', gap: 20, alignItems: 'center'},
  plusText: {
    fontSize: 40, // Adjust size
    color: Colors.white,
  },
  text: {
    fontFamily: Fonts.ROBOTO_REGULAR,
    fontSize: 14,
    color: Colors.white,
    letterSpacing: 1.35,
    fontWeight: '900',
  },
});
export default styles;

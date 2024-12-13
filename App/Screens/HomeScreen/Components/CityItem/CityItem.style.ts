import Colors from 'App/Themes/Colors/Colors';
import Fonts from 'App/Themes/Fonts/Fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 16,
    paddingVertical: 17,
  },
  icon: {
    width: 24,
    height: 24,
  },
  text: {
    marginStart: 32,
    fontWeight: '900',
    fontSize: 14,
    fontFamily: Fonts.ROBOTO_REGULAR,
    flexGrow: 1,
  },
});

export default styles;

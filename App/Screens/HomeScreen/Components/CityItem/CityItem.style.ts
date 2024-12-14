import Colors from 'App/Themes/Colors/Colors';
import Fonts from 'App/Themes/Fonts/Fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 16,
    paddingVertical: 17,
    alignItems: 'center',
    gap: 32,
  },
  infoIcon: {
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  cityIcon: {
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  text: {
    fontWeight: '900',
    fontSize: 14,
    fontFamily: Fonts.ROBOTO_REGULAR,
    flex: 1,
    flexShrink: 1,
  },
});

export default styles;

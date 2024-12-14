import Colors from 'App/Themes/Colors/Colors';
import Fonts from 'App/Themes/Fonts/Fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  backButton: {
    marginTop: 35,
  },
  backImage: {width: 48, height: 48},
  header: {
    height: 150,
    backgroundColor: Colors.blue,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 20,
    position: 'absolute',
    marginTop: 105,
    left: 32,
    right: 32,
    paddingVertical: 26,
    paddingHorizontal: 32,
  },
  cityName: {
    fontSize: 24,
    fontFamily: Fonts.ROBOTO_REGULAR,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 68,
  },
  weatherIcon: {
    width: 94,
    height: 94,
    alignSelf: 'center',
    marginBottom: 67,
  },
  infoContainer: {
    marginTop: 16,
    gap: 7,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 14,
    fontWeight: '900',
    fontFamily: Fonts.ROBOTO_REGULAR,
  },
  value: {
    fontSize: 20,
    fontFamily: Fonts.ROBOTO_REGULAR,
    color: Colors.blue,
    includeFontPadding: false,
  },
});

export default styles;

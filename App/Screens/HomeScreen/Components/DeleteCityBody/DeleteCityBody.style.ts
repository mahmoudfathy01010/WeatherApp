import Colors from 'App/Themes/Colors/Colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: Colors.white,
    height: 150,
    gap: 8,
    justifyContent: 'space-between',
  },

  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    paddingHorizontal: 24,
    height: 48,
    borderRadius: 56,
    flexDirection: 'row',
    borderColor: Colors.blue,
    borderWidth: 2,
    gap: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: Colors.blue,
    fontSize: 16,
  },
  deleteCityButton: {
    paddingHorizontal: 24,
    height: 48,
    backgroundColor: Colors.blue,
    borderRadius: 56,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  deleteCityText: {
    color: Colors.white,
    fontSize: 16,
  },
  deleteCityMessage: {
    textAlign: 'center',
    fontSize: 16,
  },
});

export default styles;

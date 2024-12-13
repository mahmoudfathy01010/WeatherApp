import Colors from 'App/Themes/Colors/Colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: Colors.white,
    height: 200,
    gap: 8,
  },
  cityTextInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 14,
  },
  cityTextInputContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  actionsContainer: {flexDirection: 'row', justifyContent: 'center', gap: 20},
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
  AddCityButton: {
    paddingHorizontal: 24,
    height: 48,
    backgroundColor: '#2388C7',
    borderRadius: 56,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  addCityPlusSymbolText: {
    color: Colors.white,
    fontSize: 32,
  },
  addCityText: {
    color: Colors.white,
    fontSize: 16,
  },
});

export default styles;
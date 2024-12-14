import {Text, TouchableOpacity, View} from 'react-native';
import styles from './FloatingButton.style';
import AppText from 'App/Components/AppText/AppText';
import {FloatingButtonProps} from './FloatingButton.d';

const FloatingButton = ({onPress, testID}: FloatingButtonProps) => {
  return (
    <View style={styles.container} testID={testID}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onPress();
        }}>
        <View style={styles.textContainer}>
          <Text style={styles.plusText}>+</Text>
          <AppText
            style={styles.text}
            i18nKey="HomeScreenAddCityModalAddCityText"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FloatingButton;

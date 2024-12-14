import NavigationFunctions from 'App/Containers/AppNavigation/NavigationFunctions';
import Images from 'App/Themes/Images/Images';
import {Image, TouchableOpacity, View} from 'react-native';
import AppText from '../AppText/AppText';
import {AppHeaderProps} from './AppHeader.d';
import styles from './AppHeader.style';

const AppHeader = ({showBackButton = true, title}: AppHeaderProps) => {
  return (
    <View style={styles.container}>
      {showBackButton && (
        <TouchableOpacity
          testID="backButton"
          style={styles.backButton}
          onPress={() => {
            NavigationFunctions.goBack();
          }}>
          <Image source={Images.back} style={styles.backImage} />
        </TouchableOpacity>
      )}
      {title && (
        <AppText
          i18nKey={title}
          style={styles.headerText}
          isCapitalized
          testID={'title'}
        />
      )}
    </View>
  );
};

export default AppHeader;

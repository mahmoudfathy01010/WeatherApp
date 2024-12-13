import AppText from 'App/Components/AppText/AppText';
import Images from 'App/Themes/Images/Images';
import {Image, TouchableOpacity, View} from 'react-native';
import {CityItemProps} from './CityItem.d';
import styles from './CityItem.style';
import NavigationFunctions from 'App/Containers/AppNavigation/NavigationFunctions';
import Routes from 'App/Containers/AppNavigation/Routes';
const CityItem = ({cityName}: CityItemProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        NavigationFunctions.navigate(Routes.CityWeatherDetails);
      }}>
      <View style={styles.container}>
        <Image source={Images.city} style={styles.icon} />
        <AppText i18nKey={cityName} style={styles.text} />
        <TouchableOpacity>
          <Image source={Images.info} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default CityItem;

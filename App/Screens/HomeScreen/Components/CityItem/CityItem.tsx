import AppText from 'App/Components/AppText/AppText';
import Images from 'App/Themes/Images/Images';
import {Image, TouchableOpacity, View} from 'react-native';
import {CityItemProps} from './CityItem.d';
import styles from './CityItem.style';
import NavigationFunctions from 'App/Containers/AppNavigation/NavigationFunctions';
import Routes from 'App/Containers/AppNavigation/Routes';
const CityItem = ({cityName, onDeleteCity, cityId, testID}: CityItemProps) => {
  return (
    <TouchableOpacity
      testID={testID}
      onPress={() => {
        NavigationFunctions.navigate(Routes.CityWeatherDetails, {
          cityName,
          cityId,
        });
      }}>
      <View style={styles.container}>
        <Image source={Images.city} style={styles.cityIcon} />
        <AppText
          i18nKey={cityName}
          style={styles.text}
          isCapitalized={true}
          testID="cityName"
        />
        <TouchableOpacity
          onPress={() => {
            onDeleteCity(cityId);
          }}>
          <AppText i18nKey={'HomeScreenItemDeleteText'} isCapitalized={true} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            NavigationFunctions.navigate(Routes.CityWeatherHistory, {
              cityId,
              cityName,
            });
          }}>
          <Image source={Images.info} style={styles.infoIcon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default CityItem;

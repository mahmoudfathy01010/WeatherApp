import Background from 'App/Components/Background/Background';
import {View, Text, Image} from 'react-native';
import {CityWeatherDetailsProps} from './CityWeatherDetails.d';
import AppText from 'App/Components/AppText/AppText';
import styles from './CityWeatherDetails.style';
import useApiCall from 'App/Hooks/useApiCall';
import {convertKelvinToCelsius} from 'App/generics/utils';
import AppHeader from 'App/Components/AppHeader/AppHeader';
import Loading from 'App/Components/Loading/Loading';
import loadCityWeatherDetails from 'App/Services/API/Requests/CityWeatherDetails/CityWeatherDetails';
import {CityWeatherDetailsResponse} from 'App/Services/API/Requests/CityWeatherDetails/CityWeatherDetails.d';
import Error from 'App/Components/Error/Error';

const CityWeatherDetails = ({route}: CityWeatherDetailsProps) => {
  const {
    responseData: cityWeatherDetails,
    isLoading,
    errorObject,
  } = useApiCall<CityWeatherDetailsResponse>(loadCityWeatherDetails, {
    cityName: route?.params?.cityName,
    cityId: route?.params?.cityId,
  });

  const {name, weather, main, wind} = cityWeatherDetails || {};

  const weatherDetails = (
    <View style={styles.card} testID="CityWeatherDetailsContent">
      <View style={{}}>
        <Text testID="cityName" style={styles.cityName}>
          {name}
        </Text>
        <Image
          source={{
            uri: `https://openweathermap.org/img/w/${weather?.[0]?.icon}.png`,
          }}
          style={styles.weatherIcon}
        />
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <AppText
              style={styles.label}
              i18nKey={'CityWeatherDetailsDescription'}
            />
            <Text testID="description" style={styles.value}>
              {weather?.[0]?.description}
            </Text>
          </View>
          <View style={styles.infoRow}>
            <AppText
              style={styles.label}
              i18nKey={'CityWeatherDetailsTemperature'}
            />
            <Text style={styles.value} testID="temprature">
              {convertKelvinToCelsius(main?.temp) + '° C'}
            </Text>
          </View>
          <View style={styles.infoRow}>
            <AppText
              style={styles.label}
              i18nKey={'CityWeatherDetailsHumidity'}
            />
            <Text testID="humidity" style={styles.value}>
              {main?.humidity + '%'}
            </Text>
          </View>
          <View style={styles.infoRow}>
            <AppText
              style={styles.label}
              i18nKey={'CityWeatherDetailsWindSpeed'}
            />
            <Text testID="windspeed" style={styles.value}>
              {wind?.speed + ' km/h'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );

  const renderData = () => {
    if (isLoading) {
      return <Loading testID="CityWeatherDetailsLoading" />;
    }

    if (errorObject || !cityWeatherDetails) {
      return (
        <Error
          testID="CityWeatherDetailsError"
          message={
            errorObject?.statusCode === 404
              ? 'CityWeatherDetailsNoDataAvailableMessage'
              : errorObject?.message
          }
        />
      );
    }

    return weatherDetails;
  };

  return (
    <View style={styles.container} testID="CityWeatherDetailsScreen">
      <Background />
      <AppHeader />

      {renderData()}
    </View>
  );
};

export default CityWeatherDetails;

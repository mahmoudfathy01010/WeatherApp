import {View, FlatList, StatusBar} from 'react-native';
import Storage from 'App/Services/Storage/Storage';
import Background from 'App/Components/Background/Background';
import styles from './CityWeatherHistory.style';
import {CityWeatherHistoryProps} from './CityWeatherHistory.d';
import HistoricalWeatherItem from './HistoricalWeatherItem/HistoricalWeatherItem';
import _ from 'lodash';
import AppHeader from 'App/Components/AppHeader/AppHeader';
import Loading from 'App/Components/Loading/Loading';
import Error from 'App/Components/Error/Error';
import {translate} from 'App/I18n/helper';
import useApiCall from 'App/Hooks/useApiCall';
import {CityHistoryItem} from 'App/Services/API/Requests/CityWeatherDetails/CityWeatherDetails.d';

const CityWeatherHistory = ({route}: CityWeatherHistoryProps) => {
  const {
    responseData: cityWeatherHistoryList,
    isLoading,
    errorObject,
  } = useApiCall<CityHistoryItem[]>(Storage.getObject, route?.params?.cityId);

  const renderContent = () => {
    if (isLoading) {
      return <Loading testID={'CityWeatherHistoryLoading'} />;
    }
    if (
      !cityWeatherHistoryList ||
      cityWeatherHistoryList.length === 0 ||
      errorObject
    ) {
      return (
        <Error
          message="CityWeatherHistoryNoDataMessage"
          testID="CityWeatherHistoryError"
        />
      );
    }

    return (
      <FlatList
        data={cityWeatherHistoryList}
        keyExtractor={item => String(item.id)}
        renderItem={({item, index}) => {
          return (
            <HistoricalWeatherItem
              {...item}
              testID={'historicalItem' + index}
            />
          );
        }}
        contentContainerStyle={styles.listContainer}
      />
    );
  };
  return (
    <View style={styles.container} testID="CityWeatherHistory">
      <Background />
      <StatusBar
        translucent={true} // Make the StatusBar transparent
        backgroundColor="rgba(0, 0, 0, 0.1)" // Set background color to transparent
      />
      <AppHeader
        title={`${route?.params?.cityName} ${translate(
          'CityWeatherHistoryHeader',
        )}`}
      />
      {renderContent()}
    </View>
  );
};

export default CityWeatherHistory;

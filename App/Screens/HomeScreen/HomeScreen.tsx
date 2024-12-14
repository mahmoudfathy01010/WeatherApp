import {View, FlatList, StatusBar} from 'react-native';
import FloatingButton from './Components/FloatingButton/FloatingButton';
import {useEffect, useState} from 'react';
import AppModal from 'App/Components/AppModal/AppModal';
import AddCityBody from './Components/AddCityBody/AddCityBody';
import Storage from 'App/Services/Storage/Storage';
import styles from './HomeScreen.style';
import Background from 'App/Components/Background/Background';
import CityItem from './Components/CityItem/CityItem';
import AppHeader from 'App/Components/AppHeader/AppHeader';
import Error from 'App/Components/Error/Error';
import {CITIES} from 'App/Services/Storage/Storage.constants';
import {City} from './HomesCreen.d';
import DeleteCityBody from './Components/DeleteCityBody/DeleteCityBody';
import {deleteCityAndItsHistoricalData} from './HomeScreen.helper';
import useApiCall from 'App/Hooks/useApiCall';
import Loading from 'App/Components/Loading/Loading';

const HomeScreen = () => {
  const [isAddCityModalVisible, setAddCityModalVisible] = useState(false);
  const [isDeleteCityModalVisible, setIsDeleteCityModalVisible] =
    useState(false);

  const [cityIdToBeDelete, setCityIdToBeDeleted] = useState<
    string | undefined
  >();

  const {
    responseData: cities,
    isLoading,
    errorObject,
    refresh,
  } = useApiCall<City[]>(Storage.getObject, CITIES);

  const renderContent = () => {
    if (isLoading) {
      return <Loading testID="HomeScreenLoading" />;
    }

    if (!cities || cities.length === 0 || errorObject) {
      return (
        <Error message="HomeScreenNoCitiesMessage" testID="HomeScreenError" />
      );
    }

    return (
      <FlatList
        data={cities}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return (
            <CityItem
              testID={'CityItem' + index}
              cityId={item.id}
              cityName={item.cityName}
              onDeleteCity={(cityId: string) => {
                setCityIdToBeDeleted(cityId);
                setIsDeleteCityModalVisible(true);
              }}
            />
          );
        }}
        contentContainerStyle={styles.listContainer}
      />
    );
  };
  return (
    <View style={styles.container} testID="HomeScreen">
      <Background />

      <StatusBar translucent={true} />

      <AppHeader showBackButton={false} title="HomeScreenHeaderText" />

      {renderContent()}

      <FloatingButton
        testID="floatingButton"
        onPress={() => {
          setAddCityModalVisible(true);
        }}
      />

      <AppModal testID="addCityModal" isVisible={isAddCityModalVisible}>
        <AddCityBody
          onAddCity={async () => {
            setAddCityModalVisible(false);
            await refresh();
          }}
          onClose={() => {
            setAddCityModalVisible(false);
          }}
        />
      </AppModal>

      <AppModal testID="removeCityModal" isVisible={isDeleteCityModalVisible}>
        <DeleteCityBody
          onDeleteCity={async () => {
            await deleteCityAndItsHistoricalData(cityIdToBeDelete);
            setIsDeleteCityModalVisible(false);
            await refresh();
          }}
          onClose={() => {
            setIsDeleteCityModalVisible(false);
          }}
        />
      </AppModal>
    </View>
  );
};

export default HomeScreen;

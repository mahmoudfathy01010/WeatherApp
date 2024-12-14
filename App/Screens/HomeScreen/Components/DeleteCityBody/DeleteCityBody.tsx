import {TouchableOpacity, View} from 'react-native';
import {DeleteCityBodyProps} from './DeleteCityBody.d';
import styles from './DeleteCityBody.style';
import AppText from 'App/Components/AppText/AppText';

const DeleteCityBody = ({onDeleteCity, onClose}: DeleteCityBodyProps) => {
  const renderActions = () => {
    return (
      <View style={styles.actionsContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              onClose();
            }}
            style={styles.closeButton}>
            <AppText
              style={styles.closeButtonText}
              i18nKey="HomeScreenAddCityModalCloseText"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={async () => {
              onDeleteCity();
            }}
            style={styles.deleteCityButton}>
            <AppText
              style={styles.deleteCityText}
              i18nKey={'HomeScreenADeleteCityModalDeleteCityText'}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <AppText
        style={styles.deleteCityMessage}
        i18nKey="HomeScreenDeleteCityModalDeleteCityMessage"
      />
      {renderActions()}
    </View>
  );
};

export default DeleteCityBody;

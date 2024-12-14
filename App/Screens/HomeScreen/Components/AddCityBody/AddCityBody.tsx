import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import Images from 'App/Themes/Images/Images';
import {AddCityBodyProps} from './AddCityBody.d';
import styles from './AddCityBody.style';
import AppText from 'App/Components/AppText/AppText';
import {translate} from 'App/I18n/helper';
import {useState} from 'react';
import Storage from 'App/Services/Storage/Storage';
import {CITIES} from 'App/Services/Storage/Storage.constants';
import {City} from '../../HomesCreen.d';

const AddCityBody = ({onAddCity, onClose}: AddCityBodyProps) => {
  const [cityName, setCityName] = useState<string | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  const saveCityName = async () => {
    if (cityName) {
      const cities = (await Storage.getObject(CITIES)) as City[];
      const isCityExist = cities?.some(
        item => item.cityName?.toLowerCase() === cityName.toLowerCase(),
      );

      if (isCityExist) {
        setErrorMessage('HomeScreenAddCityModalCityExistErrorMessage');
      } else {
        await Storage.updateArray(CITIES, [{cityName, id: String(Date.now())}]);
        onAddCity();
      }
    } else {
      setErrorMessage('HomeScreenAddCityModalEmptyTextinputErrorMessage');
    }
  };

  const renderInput = () => {
    return (
      <View style={styles.cityTextInputContainer}>
        <Image source={Images.search} />
        <TextInput
          value={cityName}
          style={styles.cityTextInput}
          placeholder={translate('HomeScreenAddCityModalTextInputPlaceHolder')}
          onChangeText={(text: string) => {
            if (text) {
              setErrorMessage(undefined);
            }
            setCityName(text);
          }}
        />
      </View>
    );
  };

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
              saveCityName();
            }}
            style={styles.AddCityButton}>
            <AppText style={styles.addCityPlusSymbolText} i18nKey="+" />
            <AppText
              style={styles.addCityText}
              i18nKey={'HomeScreenAddCityModalAddCityText'}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderInput()}
      {errorMessage && (
        <AppText style={styles.errorMessage} i18nKey={errorMessage} />
      )}
      {renderActions()}
    </View>
  );
};

export default AddCityBody;

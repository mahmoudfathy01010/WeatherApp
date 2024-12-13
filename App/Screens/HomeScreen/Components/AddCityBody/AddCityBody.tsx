import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Images from 'App/Themes/Images/Images';
import {AddCityBodyProps} from './AddCityBody.d';
import styles from './AddCityBody.style';
import AppText from 'App/Components/AppText/AppText';
import {translate} from 'App/I18n/helper';
import {useState} from 'react';
import Storage from 'App/Services/Storage/Storage';

const AddCityBody = ({onAddCity, onClose}: AddCityBodyProps) => {
  const [cityName, setCityName] = useState<string | undefined>(undefined);
  return (
    <View style={styles.container}>
      <View style={styles.cityTextInputContainer}>
        <Image source={Images.search} />
        <TextInput
          value={cityName}
          style={styles.cityTextInput}
          placeholder={translate('HomeScreenAddCityModalTextInputPlaceHolder')}
          onChangeText={(text: string) => {
            setCityName(text);
          }}
        />
      </View>
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
              await Storage.updateArray('cities', [
                {cityName, id: String(Date.now())},
              ]);
              onAddCity();
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
    </View>
  );
};

export default AddCityBody;

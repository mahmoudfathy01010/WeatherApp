import {convertKelvinToCelsius} from 'App/generics/utils';
import {View, Text, Image} from 'react-native';
import _ from 'lodash';
import moment from 'moment';
import {HistoricalWeatherItemProps} from './HistoricalWeatherItem.d';
import styles from './HistoricalWeatherItem.style';

const HistoricalWeatherItem = ({
  date,
  description,
  temperature,
  icon,
  testID,
}: HistoricalWeatherItemProps) => {
  const formattedDateTime = moment.unix(date).format('DD.MM.YYYY - HH:mm');

  return (
    <View style={styles.container} testID={testID}>
      <Image
        source={{
          uri: `https://openweathermap.org/img/w/${icon}.png`,
        }}
        style={styles.icon}
      />
      <View style={styles.textContainer}>
        <Text testID="date" style={styles.date}>
          {formattedDateTime}
        </Text>
        <Text testID="descriptionAndTemp" style={styles.description}>
          {_.capitalize(description)}, {convertKelvinToCelsius(temperature)}°C
        </Text>
      </View>
    </View>
  );
};

export default HistoricalWeatherItem;

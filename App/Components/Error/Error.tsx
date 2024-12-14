import {View} from 'react-native';
import AppText from '../AppText/AppText';
import {ErrorProps} from './Error.d';
import styles from './Error.style';

const Error = ({message, testID}: ErrorProps) => {
  return (
    <View style={styles.container} testID={testID}>
      <AppText i18nKey={message} />
    </View>
  );
};

export default Error;

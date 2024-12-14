import {ActivityIndicator, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import styles from './Loading.style';

const Loading = ({testID}) => {
  return (
    <View style={styles.container} testID={testID}>
      <ActivityIndicator size={50} color={Colors.blue} />
    </View>
  );
};

export default Loading;
